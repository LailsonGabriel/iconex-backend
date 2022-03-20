import { Request, Response, NextFunction } from "express";
import { User } from "../../interfaces/UserAndCompany";
import { getCompanyByEmail, getUserByEmail } from "../services/LoginServices";

const loginUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (
    user.some((usr: User) => usr.email === email && usr.password === password)
  ) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

const loginCompanyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const company = await getUserByEmail(email);
  if (
    company.some(
      (cmp: User) => cmp.email === email && cmp.password === password,
    )
  ) {
    return res.status(402).json({ message: "Email ou senha inválidos" });
  }

  next();
};

export { loginCompanyMiddleware, loginUserMiddleware };
