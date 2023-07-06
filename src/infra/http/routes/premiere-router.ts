import { Router } from 'express';
import PremiereController from '../controllers/premiere-controller';

const premiereRouter = Router();

const premiereController = new PremiereController();
premiereRouter.get('/premiere', premiereController.showAll);

export default premiereRouter;