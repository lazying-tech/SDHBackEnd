import { NextFunction, Request, Response } from "express";
import { ConnectDatabase } from "../config/index.js";
import * as identity from "aspnetcore-identity-password-hasher";
export const UserController = {
  Login: async function (req: Request, res: Response, next: NextFunction) {
    try {
      const pool = await ConnectDatabase();
      const username = req.body.username;

      const password = req.body.password;
      const user = await pool
        .request()
        .query(
          `Select * From AspNetUsers Where AspNetUsers.UserName='${username}' `
        );

      if (!user) {
        return res.status(404).json("None User");
      }
      const verify = await identity.verify(
        password,
        user.recordset[0].PasswordHash
      );

      if (!verify) {
        return res.status(500).json("Password is Wrong.Please Try Again");
      }

      return res.json(user.recordset[0]);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },

  UpdateProfile: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const pool = await ConnectDatabase();

      const updateData = req.body;
      let query = "UPDATE AspNetUsers SET ";

      Object.keys(updateData).forEach((key, index) => {
        query += `${key} = '${updateData[key]}'`;

        // Nếu có field email thì thêm lun NormalizedEmail
        if (key === "Email") {
          query += `, NormalizedEmail = '${updateData["Email"].toUpperCase()}'`;
        }

        // Nếu có field HO_TEN thì thêm lun HO_HOC_VIEN,TEN_HOC_VIEN
        if (key === "HO_TEN") {
          const array = updateData["HO_TEN"].split(" ");
          const TEN = array[array.length - 1];
          const HO = array.slice(0, -1).join(" ");

          query += `, HO_HOC_VIEN='${HO}', TEN_HOC_VIEN='${TEN}'`;
        }
        if (index !== Object.keys(updateData).length - 1) {
          query += ", ";
        }
      });

      query += ` WHERE Id=@id`;

      // console.log(query);
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(query);
      return res.json("Change Successfully");
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  },

  ChangePassword: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const pool = await ConnectDatabase();
      const oldPassword = req.body.oldPassword;
      const newPassword = req.body.newPassword;
      const repeatPassword = req.body.repeatPassword;

      const user = await pool
        .request()
        .input("id", req.params.id)
        .query(`Select * From AspNetUsers Where AspNetUsers.Id=@id `);

      if (!user) {
        return res.status(501).json("None User");
      }

      const verifyoldPassword = await identity.verify(
        oldPassword,
        user.recordset[0].PasswordHash
      );

      if (!verifyoldPassword) {
        return res.status(501).json("Wrong Password");
      }

      // check newPassword and repeatPassword
      if (!(newPassword === repeatPassword)) {
        return res.status(501).json("Repeat Password Is Wrong");
      }

      // Hash NewPassword
      const hashPassword = await identity.hash(newPassword);

      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(
          `UPDATE AspNetUsers SET PasswordHash='${hashPassword}' where Id=@id`
        );
      return res.json("Change Password Successfully");
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },
};
