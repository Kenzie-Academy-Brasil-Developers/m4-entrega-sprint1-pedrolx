import { validate } from "uuid";

const schemaValidation = (schema) => async (request, response, next) => {
    try {
        const validatedData = await schema.validate(request.body);
        request.body = validatedData;
        next();
    } catch (error) {
        return response.status(400).json({ message: error.erros.join(', ') })
    }
}

export default schemaValidation;