import { users } from "../database"

const listUserService = () => {

    const usersFound = users.map((user) => {
        return {...user, hashedPassword: undefined};
    });

    return usersFound;
}

export default listUserService;