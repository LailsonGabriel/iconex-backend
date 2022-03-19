import { User } from "../../interfaces/UserAndCompany";
import { UserModel } from "../models/UserModel";

const getUserById = async (id: string): Promise<User> => {
  const user = await UserModel.findOne({ where: { id } });

  return user as unknown as User;
};

const createUser = async (body: User): Promise<User> => {
  const user = await UserModel.create({ ...body });

  return user as unknown as User;
};

const updateUser = async (body: User, id: string): Promise<User> => {
  const user = await UserModel.update({ ...body }, { where: { id } });

  return user as unknown as User;
};

const deleteUser = async (id: string): Promise<void> => {
  await UserModel.destroy({ where: { id } });
};

export { getUserById, createUser, updateUser, deleteUser };
