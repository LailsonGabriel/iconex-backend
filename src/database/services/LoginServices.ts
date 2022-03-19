import { UserAndCompany } from "../../interfaces/UserAndCompany";
import { CompanyModel } from "../models/CompanyModel";
import { UserModel } from "../models/UserModel";

const getCompanyByEmail = async (email: string): Promise<UserAndCompany> => {
  const company = await CompanyModel.findOne({ where: { email }, raw: true });

  return company as unknown as UserAndCompany;
};

const getUserByEmail = async (email: string): Promise<UserAndCompany> => {
  const user = await UserModel.findOne({ where: { email }, raw: true });

  return user as unknown as UserAndCompany;
};

export { getCompanyByEmail, getUserByEmail };
