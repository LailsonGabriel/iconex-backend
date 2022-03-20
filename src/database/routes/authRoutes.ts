import express = require("express");
const router = express.Router();
import { login } from "../controllers/authController";
import {
  loginCompanyMiddleware,
  loginUserMiddleware,
} from "../middlewares/loginMiddleware";

router.post("/user/login", loginUserMiddleware, login);
router.post("/company/login", loginCompanyMiddleware, login);
