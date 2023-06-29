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
exports.SubGroupController = void 0;
const index_js_1 = require("../config/index.js");
exports.SubGroupController = {
    GetAllSubGroup: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool.request()
                    .query('select * from TIEUNHOM');
                res.json(result.recordset);
            }
            catch (error) {
                res.status(500);
            }
        });
    },
    GetSubGroupById: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input('id', req.params.id)
                    .query('select * from TIEUNHOM where id = @id');
                return res.json(result.recordset[0]);
            }
            catch (error) {
                res.status(500);
            }
        });
    },
    GetAllSubGroupByIdGroup: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input('id', req.params.id)
                    .query('select * from TIEUNHOM where NHOM_ID = @id');
                console.log(result);
                return res.json(result.recordset);
            }
            catch (error) {
                res.status(500);
            }
        });
    }
};
//# sourceMappingURL=SubGroup.controller.js.map