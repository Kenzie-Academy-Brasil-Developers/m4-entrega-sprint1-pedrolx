import { users } from "../database"

const listUserService = () => {

    const usersFound = users.map((user) => {
        user.uuid = user.id;
        delete user.id;
        return user;
    })

    return usersFound;
}

export default listUserService;