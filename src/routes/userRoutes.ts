import { Router } from 'express';
import { getAllUsers } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers); // Ruta para obtener todos los usuarios

export default router;
