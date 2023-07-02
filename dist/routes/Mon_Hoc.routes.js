"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mon_Hoc_controller_js_1 = require("../controllers/Mon_Hoc.controller.js");
const MonHocRoute = express_1.default.Router();
MonHocRoute.get("/getLH/:id", Mon_Hoc_controller_js_1.MHController.GetLichHocCuaMotHocVien);
MonHocRoute.get("/getLT/:id", Mon_Hoc_controller_js_1.MHController.GetLichThiCuaMotHocVien);
MonHocRoute.get("/getDMH/:id", Mon_Hoc_controller_js_1.MHController.GetDiemMHCuaMotHocVien);
exports.default = MonHocRoute;
//# sourceMappingURL=Mon_Hoc.routes.js.map