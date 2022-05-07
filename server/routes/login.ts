import express, { Request, Response } from 'express';
import { LoginController } from '../controllers/LoginController';
import { auth } from '../middleware/Auth';
const router = express.Router();

router.get('/login', LoginController.login);

export { router }