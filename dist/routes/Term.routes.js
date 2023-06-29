"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Term_controller_js_1 = require("../controllers/Term.controller.js");
const express_1 = __importDefault(require("express"));
const Termroute = express_1.default.Router();
Termroute.get('/getAllTerm', Term_controller_js_1.TermpController.GetAllTerm);
Termroute.get('/getTerm/:id', Term_controller_js_1.TermpController.GetTermById);
exports.default = Termroute;
//# sourceMappingURL=Term.routes.js.map