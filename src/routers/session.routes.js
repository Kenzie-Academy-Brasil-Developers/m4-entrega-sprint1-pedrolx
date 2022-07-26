import { Router } from 'express';
import createSessionController from '../controllers/createSession.controller';

const sessionRoutes = Router()

sessionRoutes.post('', createSessionController);

export default sessionRoutes;