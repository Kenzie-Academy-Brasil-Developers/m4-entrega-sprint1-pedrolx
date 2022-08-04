import { users } from '../database';
import userProfileService from '../services/userProfile.service';

const userProfileController = (request, response) => {
    const userLogged = users.find(user => user.uuid === request.userId);

    const found = userProfileService(userLogged);


    if(found) {
        return response.status(200).json(found);
    }

    return response.status(401).json({ message: "User not found"})
}

export default userProfileController;