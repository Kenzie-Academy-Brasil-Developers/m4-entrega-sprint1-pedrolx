import { users } from "../database";

const doubleValidation = (request, response, next) => {
  const user = users.find((user) => user.id === id);

  if(request.userId === user.id || user.isAdm === true) {
    next()
  }
  
  return response.status(401).json({ message: "Missing admin permissions" })

};

export default doubleValidation;