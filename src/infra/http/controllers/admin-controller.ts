import { NextFunction, Request, Response } from 'express';
import { FindByIdAdmin } from '../../../use-cases/admin-use-cases/index-admin';
import { PrismaAdminRepository } from '../../../infra/database/repositories/prisma-admin-repository';

export class AdminController {
    async findById(req: Request<{ id: number }>, res: Response, next: NextFunction) {
        const adminRepository = new PrismaAdminRepository();
        const findAdminById = new FindByIdAdmin(adminRepository);
        try {
            const id = Number(req.params.id);
            const admin = await findAdminById.execute(id);
            res.status(200).json(admin);
        } catch (error) {
            next(error);
        }

    }
}