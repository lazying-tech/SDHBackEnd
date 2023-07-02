import express from "express";
import { MHController } from "../controllers/Mon_Hoc.controller.js";

const MonHocRoute = express.Router();

MonHocRoute.get("/getLH/:id", MHController.GetLichHocCuaMotHocVien);
MonHocRoute.get("/getLT/:id", MHController.GetLichThiCuaMotHocVien);
MonHocRoute.get("/getDMH/:id", MHController.GetDiemMHCuaMotHocVien);

export default MonHocRoute;
