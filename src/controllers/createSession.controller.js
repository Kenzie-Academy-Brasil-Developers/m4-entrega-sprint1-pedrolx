import createSessionService from "../services/createSession.services";

const createSessionController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await createSessionService(email, password);
    return response.json(token);

  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default createSessionController;
