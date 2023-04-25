import { NextFunction, Request, Response } from 'express';
import { IndexAdmin } from '../../../use-cases/admin-use-cases/index-admin';

export class AdminController {
    async findById(req: Request<{id: number}>, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const admin = await IndexAdmin.findAdminById.execute(id);
            res.status(200).json(admin);
        }catch(error) {
            next(error);
        }

    }
}