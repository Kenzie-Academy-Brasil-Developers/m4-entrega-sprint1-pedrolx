import { users } from "../database";

const doubleValidation = (request, response, next) => {
  const id  = request.userId;
  const user = users.find((user) => user.id === id);

  if(id === user.id || user.isAdm === true) {
    next()
  }
  
  return response.status(401).json({ message: "You can't edit or delete other users" })

};

export default doubleValidation;