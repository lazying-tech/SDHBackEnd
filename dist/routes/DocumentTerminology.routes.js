"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentTerminology_controller_js_1 = require("../controllers/DocumentTerminology.controller.js");
const express_1 = __importDefault(require("express"));
const DocTermroute = express_1.default.Router();
DocTermroute.get('/getAllDocTerm', DocumentTerminology_controller_js_1.DocTermController.GetAllDocTerm);
DocTermroute.get('/getDocTerm/:id', DocumentTerminology_controller_js_1.DocTermController.GetDocTermById);
exports.default = DocTermroute;
//# sourceMappingURL=DocumentTerminology.routes.js.map