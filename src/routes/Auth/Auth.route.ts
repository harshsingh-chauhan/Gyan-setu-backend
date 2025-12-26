import { Router } from 'express';
import AuthController from '../../controller/Auth.controller';

const router = Router();

// Placeholder for registration route
router.post('/register', AuthController.register);

// Placeholder for login route
router.post('/login', AuthController.login);

// Placeholder for refresh token route
router.post('/refresh', AuthController.refresh);

export default router;
