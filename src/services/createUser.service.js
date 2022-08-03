import { users } from '../database';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

const createUserService = async (email, name, password, isAdm) => {
    const userAlreadyExist = users.find((user) => user.email === email);

    if (userAlreadyExist) {
        return { message: "E-mail already registered."};
    }

    const hashedPassword = await hash(password, 10)

    const newUser = {
        name,
        email,
        hashedPassword,
        isAdm,
        createdOn: Date(),
        updatedOn: Date(),
        id: uuidv4()
    }

    const returningUser = { ...newUser } 
    returningUser.uuid = returningUser.id;
    delete returningUser.hashedPassword;
    delete returningUser.id;

    users.push(newUser);

    return returningUser;
}

export default createUserService;