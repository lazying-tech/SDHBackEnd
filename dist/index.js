"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/api/v1", index_js_1.default);
app.use("/", (req, res) => {
    res.json("SDH");
});
app.listen(PORT, () => {
    console.log(`Listenning at ${PORT} port`);
});
//# sourceMappingURL=index.js.map