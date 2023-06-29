"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mon_Hoc_routes_js_1 = __importDefault(require("./Mon_Hoc.routes.js"));
const User_routes_js_1 = __importDefault(require("./User.routes.js"));
const router = express_1.default.Router();
router.use("/user", User_routes_js_1.default);
router.use("/MH", Mon_Hoc_routes_js_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map