import { users } from "../database";

const doubleValidation = (request, response, next) => {
  const { id } = request.params;
  const user = users.find((user) => user.uuid === request.userId);

  if (user.isAdm === true) {
    next();
  } else if (user.uuid === id) {
    next();
  } else {
    return response.status(401).json({ message: "Missing admin permissions" });
  }
};

export default doubleValidation;
