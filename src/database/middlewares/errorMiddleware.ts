import { Request, Response, NextFunction } from "express";

export = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.code && err.status) {
    return res
      .status(err.status)
      .json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
};
