import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// Import Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AvatarController from './app/controllers/AvatarController';

// Import Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// All next routes that comes after routes.use(<mid>) will use the <mid> middleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.post('/avatar', upload.single('avatar'), AvatarController.store);

export default routes;