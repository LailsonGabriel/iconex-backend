import express, { json } from "express";
import { db } from "./database/db";
import errorMiddleware from "../src/database/middlewares/errorMiddleware";

const app = express();

const PORT = 8000;

app.use(json());

import authRoutes from "../src/database/routes/authRoutes";
app.use("/auth", authRoutes);

import userRoutes from "../src/database/routes/userRoutes";
app.use("/user", userRoutes);

import companyRoutes from "../src/database/routes/companyRoutes";
app.use("/company", companyRoutes);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await db.sync();
  console.log(`Server is running at http://localhost:${PORT}`);
});
