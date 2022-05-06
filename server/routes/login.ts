import express from 'express';
import { LoginController } from '../controllers/LoginController';
import { auth } from '../middleware/Auth';
const router = express.Router();

router.get('/login', LoginController.login);
router.get('/',
    auth,
    (req, res) => {
    res.status(200).send('Home Page');
})
export { router }