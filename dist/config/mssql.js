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
exports.mssql = exports.ConnectDatabase = exports.ExecuteQueryString = void 0;
const config_js_1 = require("./config.js");
const mssql = __importStar(require("mssql"));
exports.mssql = mssql;
// mssql.query()
const ExecuteQueryString = function (queryString) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield mssql.connect(config_js_1.sqlConfig);
            return yield pool.query(queryString);
        }
        catch (error) {
            throw error;
        }
    });
};
exports.ExecuteQueryString = ExecuteQueryString;
const ConnectDatabase = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield mssql.connect(config_js_1.sqlConfig);
            // const query = "select * from NHOM"
            // const result = await mssql.query([query])
            // console.dir(result)
            // const result = await ExecuteQueryString("select * from CHUONG")
            console.log("Database connected");
            return pool;
        }
        catch (error) {
            console.log("Error");
            throw error;
        }
    });
};
exports.ConnectDatabase = ConnectDatabase;
//# sourceMappingURL=mssql.js.map