import verifyToken from "../middlewares/tokenMiddleware";
import express = require("express");
import {
  getById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
const router = express.Router();

router.get("/:id", verifyToken, getById);
router.post("/", createUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
