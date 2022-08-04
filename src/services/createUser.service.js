import { users } from '../database';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

const createUserService = async (email, name, passwordCreated, isAdm) => {
    const userAlreadyExist = users.find((user) => user.email === email);

    if (userAlreadyExist) {
        return { message: "E-mail already registered."};
    }

    const password = await hash(passwordCreated, 10);

    const newUser = {
        name,
        email,
        password,
        isAdm,
        createdOn: Date(),
        updatedOn: Date(),
        uuid: uuidv4()
    }


    users.push(newUser);

    return {
        ...newUser,
        password: undefined
    };
}

export default createUserService;