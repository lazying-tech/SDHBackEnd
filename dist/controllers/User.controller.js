"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const index_js_1 = require("../config/index.js");
const identity = __importStar(require("aspnetcore-identity-password-hasher"));
exports.UserController = {
    Login: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const username = req.body.username;
                const password = req.body.password;
                const user = yield pool
                    .request()
                    .query(`Select * From AspNetUsers Where AspNetUsers.UserName='${username}' `);
                if (!user) {
                    return res.status(404).json("None User");
                }
                const verify = yield identity.verify(password, user.recordset[0].PasswordHash);
                if (!verify) {
                    return res.status(500).json("Password is Wrong.Please Try Again");
                }
                return res.json(user.recordset[0]);
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    },
    UpdateProfile: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
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
                const result = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query(query);
                return res.json("Change Successfully");
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        });
    },
    ChangePassword: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const oldPassword = req.body.oldPassword;
                const newPassword = req.body.newPassword;
                const repeatPassword = req.body.repeatPassword;
                const user = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query(`Select * From AspNetUsers Where AspNetUsers.Id=@id `);
                if (!user) {
                    return res.status(501).json("None User");
                }
                const verifyoldPassword = yield identity.verify(oldPassword, user.recordset[0].PasswordHash);
                if (!verifyoldPassword) {
                    return res.status(501).json("Wrong Password");
                }
                // check newPassword and repeatPassword
                if (!(newPassword === repeatPassword)) {
                    return res.status(501).json("Repeat Password Is Wrong");
                }
                // Hash NewPassword
                const hashPassword = yield identity.hash(newPassword);
                const result = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query(`UPDATE AspNetUsers SET PasswordHash='${hashPassword}' where Id=@id`);
                return res.json("Change Password Successfully");
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    },
};
//# sourceMappingURL=User.controller.js.map