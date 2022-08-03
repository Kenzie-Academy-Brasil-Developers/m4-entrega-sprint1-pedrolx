import listUserService from "../services/listUsers.service"

const listUserController = (request, response) => {
    const users = listUserService();

    return response.status(200).json(users);
}

export default listUserController;