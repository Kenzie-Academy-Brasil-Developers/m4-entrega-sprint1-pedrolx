import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
    const { id } = request.params;
    const { name, email, password, isAdm, updatedOn } = request.body;

    const updatedUser = updateUserService(name, email, id, password, isAdm, updatedOn);

    return response.json(updatedUser);
}

export default updateUserController;