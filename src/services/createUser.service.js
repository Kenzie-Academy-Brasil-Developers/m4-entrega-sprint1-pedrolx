import { users } from '../database';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

const createUserService = async (email, name, password, isAdm) => {
    const userAlreadyExist = users.find((user) => user.email === email);

    if (userAlreadyExist) {
        return "This E-mail adress is already being used."
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

    users.push(newUser);

    return newUser;
}

export default createUserService;