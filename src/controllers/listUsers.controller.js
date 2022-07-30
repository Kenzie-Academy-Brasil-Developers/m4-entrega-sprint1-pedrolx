import listUserService from "../services/listUsers.service"

const listUserController = (request, response) => {
    const users = listUserService();

    return response.json(users);
}

export default listUserController;