import userProfileService from '../services/userProfile.service';

const userProfileController = (request, response) => {
    const userLogged = request.body;

    const found = userProfileService(userLogged);

    if(found) {
        found.uuid = found.id;
        delete found.id;
        return response.status(200).json(found);
    }

    return response.status(401).json({ message: "User not found"})
}

export default userProfileController;