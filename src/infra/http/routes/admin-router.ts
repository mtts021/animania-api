import { Router } from 'express';
import { AdminController } from '../controllers/admin-controller';


const adminController = new AdminController();

const adminRouter = Router();

adminRouter.get('/admin/:id', adminController.findById);

export default adminRouter;