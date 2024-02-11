import express from "express";
import * as Controllers from "../controllers";

const router = express.Router();

router.post("/send", Controllers.Mail.sendMail);

export default router;
