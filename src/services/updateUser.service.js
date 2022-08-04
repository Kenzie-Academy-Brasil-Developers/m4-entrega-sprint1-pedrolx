import bcrypt from "bcrypt";
import { users } from "../database";

const updateUserService = async (name, email, id, password) => {

     const userIndex = users.findIndex(elemen => elemen.uuid === id);

     if (userIndex === -1) {
        return { message: "User not found" };
     }

     const updatedUser = { 
      name: name ? name : users[userIndex].name,
      email: email ? email : users[userIndex].email,
      password: password ? bcrypt.hash(password, 10) : users[userIndex].password,
      updatedOn: Date()
   };

     users[userIndex] = { ...users[userIndex], ...updatedUser };


     return users[userIndex];
}

export default updateUserService;