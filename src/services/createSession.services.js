import { users } from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import 'dotenv/config';

const createSessionService = async (email, password) => {
  const foundedUser = users.find(user => user.email === email);

  if (!foundedUser) {
    throw new Error("Invalid data, please verify.");
  }

  const passwordMatch = await compare(password, foundedUser.hashedPassword);

  if (!passwordMatch) {
    throw new Error("Invalid data, please verify.");
  }

  const token = jwt.sign({ email: foundedUser.email, id: foundedUser.id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: foundedUser.id,
  });

  return token;
};

export default createSessionService;
