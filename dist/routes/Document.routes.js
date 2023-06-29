"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Document_controller_js_1 = require("../controllers/Document.controller.js");
const express_1 = __importDefault(require("express"));
const Documentroute = express_1.default.Router();
Documentroute.get('/getAllDocument', Document_controller_js_1.DocumentController.GetAllDocument);
Documentroute.get('/getDocument/:id', Document_controller_js_1.DocumentController.GetDocumentById);
Documentroute.get('/getAllDocumentByIdTerm/:id', Document_controller_js_1.DocumentController.GetAllDocumentByIdTerm);
exports.default = Documentroute;
//# sourceMappingURL=Document.routes.js.map