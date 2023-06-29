"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_js_1 = require("../controllers/User.controller.js");
const userRoute = express_1.default.Router();
userRoute.post("/login", User_controller_js_1.UserController.Login);
userRoute.patch("/updateProfile/:id", User_controller_js_1.UserController.UpdateProfile);
userRoute.patch("/changePassword/:id", User_controller_js_1.UserController.ChangePassword);
exports.default = userRoute;
//# sourceMappingURL=User.routes.js.map