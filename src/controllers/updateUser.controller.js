import updateUserService from "../services/updateUser.service";

const updateUserController = async (request, response) => {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const updatedUser = await updateUserService(name, email, id, password);

    return response.status(200).json({...updatedUser, password: undefined});
}

export default updateUserController;