import { Router } from 'express';

import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import listUserController from '../controllers/listUsers.controller';
import updateUserController from '../controllers/updateUser.controller';
import userProfileController from '../controllers/userProfile.controller';
import userSchema from '../database/schemas/users.schema';
import admValidation from '../middlewares/admValidation.middleware';
import authenticationMiddleware from '../middlewares/authentication.middleware';
import doubleValidation from '../middlewares/doubleValidation.midlleware';
import schemaValidation from '../middlewares/schemaValidation.middleware';

const router = Router();

router.post('', schemaValidation(userSchema), createUserController);
router.get('', authenticationMiddleware, admValidation, listUserController);
router.get('/profile', authenticationMiddleware, userProfileController)
router.patch('/:id', authenticationMiddleware, doubleValidation, updateUserController);
router.delete('/:id', authenticationMiddleware, doubleValidation, deleteUserController);

export default router;