import { Router } from 'express';
import ReleaseController from '../controllers/release-controller';

const releaseRouter = Router();

const releaseController = new ReleaseController();
releaseRouter.get('/release', releaseController.showAll);

export default releaseRouter;