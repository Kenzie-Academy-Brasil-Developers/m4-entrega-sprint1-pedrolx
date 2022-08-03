import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
    const { id } = request.params;

    const deletedUser = deleteUserService(id);

    return response.status(200).json({ message: deletedUser});
}

export default deleteUserController;