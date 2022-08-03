import { users } from "../database";

const admValidation = (request, response, next) => {
  const id  = request.userId;
  const user = users.find((user) => user.id === id);

  if (user.isAdm === false) {
    return response.status(401).json({ message: "Missing admin permissions" });
  } 
  
    next();
  
};

export default admValidation;
