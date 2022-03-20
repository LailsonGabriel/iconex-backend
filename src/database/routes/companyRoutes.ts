import verifyToken from "../middlewares/tokenMiddleware";
import express = require("express");
const router = express.Router();
import {
  getCompanyById,
  updateCompany,
  createCompany,
  deleteCompany,
} from "../controllers/companyController";

router.get("/:id", verifyToken, getCompanyById);
router.post("/", createCompany);
router.put("/:id", verifyToken, updateCompany);
router.delete("/:id", verifyToken, deleteCompany);
