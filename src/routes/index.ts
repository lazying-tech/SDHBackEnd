import express from "express";

import MonHocRoute from "./Mon_Hoc.routes.js";
import userRoute from "./User.routes.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/MH", MonHocRoute);

export default router;
