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
exports.DocumentController = void 0;
const index_js_1 = require("../config/index.js");
exports.DocumentController = {
    GetAllDocument: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool.request()
                    .query('select * from TAILIEU');
                res.json(result.recordset);
            }
            catch (error) {
                res.status(500);
            }
        });
    },
    GetDocumentById: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result = yield pool
                    .request()
                    .input('id', req.params.id)
                    .query('select * from TAILIEU where id = @id');
                return res.json(result.recordset[0]);
            }
            catch (error) {
                res.status(500);
            }
        });
    },
    GetAllDocumentByIdTerm: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield (0, index_js_1.ConnectDatabase)();
                const result1 = yield pool
                    .request()
                    .input('id', req.params.id)
                    .query('select THUATNGU.* from THUATNGU where THUATNGU.id = @id');
                const result2 = yield pool
                    .request()
                    .query('select TAILIEU.* from THUATNGUTAILIEU, TAILIEU where THUATNGUTAILIEU.tailieuid = TAILIEU.id and THUATNGUTAILIEU.thuatnguid = ' + result1.recordset[0].ID);
                return res.json(result2.recordset[0]);
            }
            catch (error) {
                res.status(500);
            }
        });
    }
};
//# sourceMappingURL=Document.controller.js.map