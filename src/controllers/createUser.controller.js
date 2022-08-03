import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
    const { email, name, password, isAdm } = request.body;

    const user = await createUserService(email, name, password, isAdm);

    if (user.message) {
        return response.status(400).json(user);
    }

    return response.status(201).json(user);
}

export default createUserController;