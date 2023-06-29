import express from "express";

import { UserController } from "../controllers/User.controller.js";

const userRoute = express.Router();

userRoute.post("/login", UserController.Login);
userRoute.patch("/updateProfile/:id", UserController.UpdateProfile);
userRoute.patch("/changePassword/:id", UserController.ChangePassword);

export default userRoute;
