import { Company } from "../../interfaces/UserAndCompany";
import { CompanyModel } from "../models/CompanyModel";

const getAllCompanies = async (): Promise<Company[]> => {
  const companies = await CompanyModel.findAll();

  return companies as unknown as Company[];
};

const createCompany = async (body: Company): Promise<Company> => {
  const company = await CompanyModel.create({ ...body });

  return company as unknown as Company;
};

const updateCompany = async (body: Company, id: string): Promise<Company> => {
  const company = await CompanyModel.update({ ...body }, { where: { id } });

  return company as unknown as Company;
};

export { getAllCompanies, createCompany, updateCompany };
