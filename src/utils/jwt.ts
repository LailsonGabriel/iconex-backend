import jwt from "jsonwebtoken";

const SEGREDO = "segredinho";

interface PayloadObj {
  email: string;
}

const sign = (payload: PayloadObj): string =>
  jwt.sign(payload, SEGREDO, {
    algorithm: "HS256",
  });

const verify = (token: string) => jwt.verify(token, SEGREDO);

export = { sign, verify };
