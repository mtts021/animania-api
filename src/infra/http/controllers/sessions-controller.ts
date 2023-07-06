import { NextFunction, Request, Response } from 'express';
import { IndexAdmin } from '../../../use-cases/admin-use-cases/index-admin';
import JWT, { SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import { BadRequestError } from '../../../app/helpers/api-error';

class SessionsController { 
    async createToken(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;

        if(!email || !password) {
            throw new BadRequestError('email and password required');
        }
        try {
            const admin = await IndexAdmin.findAdminByEmailAndPassword.execute(email, password);
            const {id} = admin;
            const jwtPlayload = {email};
            const jwtOptions: SignOptions = {subject: String(id), expiresIn: '7d'};
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