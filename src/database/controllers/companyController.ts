import rescue from "express-rescue";
import { Request, Response } from "express";
import {
  createCompany as create,
  updateCompany as update,
  getCompanyById as getById,
  deleteCompany as deleteCmp,
} from "../services/CompanyServices";
import { Company } from "../../interfaces/UserAndCompany";

const getCompanyById = rescue(async (req: Request, res: Response<Company>) => {
  const { id } = req.params;

  const company = await getById(id);

  res.status(200).json(company);
});

const updateCompany = rescue(async (req: Request, res: Response<Company>) => {
  const body = req.body;
  const { id } = req.params;

  const companyUpdated = await update(body, id);

  res.status(201).json(companyUpdated);
});

const createCompany = rescue(async (req: Request, res: Response<Company>) => {
  const user = req.body;

  const companyCreated = await create(user);

  res.status(201).json(companyCreated);
});

const deleteCompany = rescue(async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteCmp(id);

  res.status(201).json({ message: "Usuário Deletado!" });
});

export { getCompanyById, updateCompany, createCompany, deleteCompany };
