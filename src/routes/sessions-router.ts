import { Router } from 'express';
import SessionsController from '../controllers/sessions-controller';


const sessionsRouter = Router();

sessionsRouter.post('/sessions', SessionsController.createToken);

export default sessionsRouter;