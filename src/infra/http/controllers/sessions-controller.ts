import { NextFunction, Request, Response } from 'express';
import { FindAdminByEmailAndPassword } from '../../../use-cases/admin-use-cases/index-admin';
import JWT, { SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { BadRequestError } from '../../../app/helpers/api-error';
import { PrismaAdminRepository } from '../../../infra/database/repositories/prisma-admin-repository';

class SessionsController {
    async createToken(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new BadRequestError('email and password required');
        }
        const adminRepository = new PrismaAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        try {
            const admin = await findAdminByEmailAndPassword.execute(email, password);
            const { id } = admin;
            const jwtPlayload = { email };
            const jwtOptions: SignOptions = { subject: String(id), expiresIn: '7d' };
            const secretKey = <string>process.env.JWT_SECRET_KEY;
            const jwt = JWT.sign(jwtPlayload, secretKey, jwtOptions);
            return res.status(200).json({
                id: id,
                email: email,
                token: jwt
            });


        } catch (error) {
            next(error);
        }

    }

}

export default new SessionsController();