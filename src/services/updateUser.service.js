import { users } from "../database";

const updateUserService = (name, email, id, password, isAdm, updatedOn) => {
    const updatedUser = { 
        name,
        email,
        id,
        password,
        isAdm,
        updatedOn: Date()
     };

     const userIndex = users.findIndex(elemen => elemen.id === id);

     if (userIndex === -1) {
        return "User not found.";
     }

     users[userIndex] = { ...users[userIndex], ...updatedUser };

     return users[userIndex];
}

export default updateUserService;