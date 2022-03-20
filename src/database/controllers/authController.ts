import rescue from "express-rescue";
import { Request, Response } from "express";
import jwt from "../../utils/jwt";

const login = rescue(async (req: Request, res: Response) => {
  const { email } = req.body;

  const token = jwt.sign(email);

  res.status(200).json({ token });
});

export { login };
