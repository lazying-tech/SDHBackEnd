"use strict";
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
exports.MHController = void 0;
const index_js_1 = require("../config/index.js");
exports.MHController = {
    GetLichHocCuaMotHocVien: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query("Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_HOC,THONG_TIN_MON_HOC.TEN_MON_HOC From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id");
                return res.json(result.recordset);
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    },
    GetLichThiCuaMotHocVien: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query("Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_THI,THONG_TIN_MON_HOC.BUOI_THI From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id");
                return res.json(result.recordset);
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    },
    GetDiemMHCuaMotHocVien: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input("id", req.params.id)
                    .query("Select [NGUOI_HOC_MON_HOC].HOC_VIEN_ID,THONG_TIN_MON_HOC.NGAY_THI,THONG_TIN_MON_HOC.BUOI_THI,THONG_TIN_MON_HOC.HESO_KT,THONG_TIN_MON_HOC.HESO_THI,THONG_TIN_MON_HOC.HESO_TX From NGUOI_HOC_MON_HOC,THONG_TIN_MON_HOC Where [NGUOI_HOC_MON_HOC].[MON_HOC_ID]=THONG_TIN_MON_HOC.ID And NGUOI_HOC_MON_HOC.HOC_VIEN_ID=@id");
                return res.json(result.recordset);
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    },
};
//# sourceMappingURL=Mon_Hoc.controller.js.map