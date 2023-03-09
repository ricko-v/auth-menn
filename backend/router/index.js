import express from 'express';
import authController from '../controllers/auth';

const router = express.Router();

router.post('/api/login', authController.login);
router.post('/api/register', authController.register);
router.get('/api/me', authController.me);

export default router;