import { Router } from 'express';

// Import Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Import Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// All next routes that comes after routes.use(<mid>) will use the <mid> middleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;