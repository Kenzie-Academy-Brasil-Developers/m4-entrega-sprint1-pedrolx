import jwt from "jsonwebtoken";
import 'dotenv/config';

const authenticationMiddleware = (request, response, next) => {

    let token = request.headers.authorization;

    if(!token) {
        return response.status(401).json({ message: "Missing authorization headers."})
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded)=> {
        if(error) {
            return response.status(401).json({ message: "You don't have permission."})
        };

        request.userId = decoded.uuid;
        request.userEmail = decoded.email;

        next();
    })
}

export default authenticationMiddleware;