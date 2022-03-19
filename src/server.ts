import express, { json } from "express";
import { db } from "./database/db";

const app = express();

const PORT = 8000;

app.use(json());

app.listen(PORT, async () => {
  await db.sync();
  console.log(`Server is running at http://localhost:${PORT}`);
});
