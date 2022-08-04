import { users } from "../database";

const admValidation = (request, response, next) => {
  const user = users.find((user) => user.uuid === request.userId);

  if (user.isAdm !== true) {
    return response.status(401).json({ message: "Missing admin permissions" });
  } 
  
    next();
  
};

export default admValidation;
