"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubGroup_controller_js_1 = require("../controllers/SubGroup.controller.js");
const express_1 = __importDefault(require("express"));
const SubGrouproute = express_1.default.Router();
SubGrouproute.get('/getAllSubGroup', SubGroup_controller_js_1.SubGroupController.GetAllSubGroup);
SubGrouproute.get('/getSubGroup/:id', SubGroup_controller_js_1.SubGroupController.GetSubGroupById);
SubGrouproute.get('/getAllSubGroupByID/:id', SubGroup_controller_js_1.SubGroupController.GetAllSubGroupByIdGroup);
exports.default = SubGrouproute;
//# sourceMappingURL=SubGroup.routes.js.map