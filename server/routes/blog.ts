import express from 'express';
import { BlogController } from '../controllers/BlogController';
const router = express.Router();

router.get('/save', BlogController.save);

export { router }