import express from "express";
import * as Controllers from "../controllers";
import * as Middlewares from "../middlewares";

const router = express.Router();

router.post("/send", Middlewares.Auth.checkAdmin, Controllers.Mail.sendMail);

export default router;
