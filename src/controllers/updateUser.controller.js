import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
    const { id } = request.params;
    const { name, email, password, isAdm, updatedOn } = request.body;

    const updatedUser = updateUserService(name, email, id, password, updatedOn);

    updatedUser.uuid = updatedUser.id;
    delete updatedUser.id;

    return response.status(200).json(updatedUser);
}

export default updateUserController;