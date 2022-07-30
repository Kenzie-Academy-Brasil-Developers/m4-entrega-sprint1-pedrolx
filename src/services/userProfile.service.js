import { users } from "../database"

const userProfileService = (userLogged) => {
    const user = users.find(user => user.email === userLogged.email);

    if (user) {
        return user;
    }
}

export default userProfileService;