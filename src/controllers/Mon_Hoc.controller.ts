import { ConnectDatabase } from "../config/index.js";
import { NextFunction, Request, Response } from "express";

export const MHController = {
  GetLichHocCuaMotHocVien: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const pool = await ConnectDatabase();

      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(
          "Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_HOC,THONG_TIN_MON_HOC.TEN_MON_HOC From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id"
        );
      return res.json(result.recordset);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },
  GetLichThiCuaMotHocVien: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const pool = await ConnectDatabase();

      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(
          "Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_THI,THONG_TIN_MON_HOC.BUOI_THI From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id"
        );
      return res.json(result.recordset);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },

  GetDiemMHCuaMotHocVien: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const pool = await ConnectDatabase();

      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(
          "Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_THI,THONG_TIN_MON_HOC.BUOI_THI,THONG_TIN_MON_HOC.HESO_KT,THONG_TIN_MON_HOC.HESO_THI,THONG_TIN_MON_HOC.HESO_TX From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id"
        );
      return res.json(result.recordset);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  },
};
