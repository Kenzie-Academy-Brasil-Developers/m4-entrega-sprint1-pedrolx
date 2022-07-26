import { users } from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import 'dotenv/config';

const createSessionService = async (email, password) => {
  const foundedUser = users.find(user => user.email === email);

  if (!foundedUser) {
    throw new Error("Invalid data, please verify.");
  }

  const passwordMatch = await compare(password, foundedUser.password);

  if (!passwordMatch) {
    throw new Error("Invalid data, please verify.");
  }

  const token = jwt.sign({ email: foundedUser.email, uuid: foundedUser.uuid }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: foundedUser.uuid,
  });

  return token;
};

export default createSessionService;
