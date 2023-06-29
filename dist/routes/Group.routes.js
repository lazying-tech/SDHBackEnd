"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Group_controller_js_1 = require("../controllers/Group.controller.js");
const express_1 = __importDefault(require("express"));
const Grouproute = express_1.default.Router();
Grouproute.get('/getAllGroup', Group_controller_js_1.GroupController.GetAllGroup);
Grouproute.get('/getGroup/:id', Group_controller_js_1.GroupController.GetGroupById);
Grouproute.get('/getSubGroupFromGroup', Group_controller_js_1.GroupController.GetSubGroupFromGroup);
exports.default = Grouproute;
//# sourceMappingURL=Group.routes.js.map