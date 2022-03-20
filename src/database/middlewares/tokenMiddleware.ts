import { NextFunction, Request, Response } from "express";
import jwt from "../../utils/jwt";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    const user = jwt.verify(token);
    req.body.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

export default verifyToken;
