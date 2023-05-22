import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import 'dotenv/config';
import { UnauthorizedError } from '../../app/helpers/api-error';

declare module 'express-serve-static-core' {
    interface Request {
        adminId: number
    }
}

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeaders = req.headers.authorization;
    
        if(!authHeaders){
            throw new UnauthorizedError('Credentials not informed');
        }
        const [authType, token] = authHeaders.split(' ');
        if(authType !== 'Bearer' || !token) {
            throw new UnauthorizedError('Invalid authentication type');
        }
        const secretKey = process.env.JWT_SECRET_KEY;
        try {
            const tokenPayload = JWT.verify(token, secretKey);
            if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
                throw new UnauthorizedError('invalid token');
            }
    
            next();
            req.adminId = Number(tokenPayload.sub);
        } catch (error) {
            throw new UnauthorizedError('invalid token');
        }
    } catch (error) {
        next(error);
        
    }

}

export default jwtAuthenticationMiddleware;