import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import 'dotenv/config';

declare module 'express-serve-static-core' {
    interface Request {
        adminId: number
    }
}

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeaders = req.headers.authorization;
    
        if(!authHeaders){
            return res.status(400).json({message: 'Credentials not informed'});
        }
        const [authType, token] = authHeaders.split(' ');
        if(authType !== 'Bearer' || !token) {
            return res.status(400).json({message: 'Invalid authentication type'});
        }
        const secretKey = process.env.JWT_SECRET_KEY;
        const tokenPayload = JWT.verify(token, secretKey);
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
            return res.status(400).json({message: 'invalid token'});
        }

        req.adminId = Number(tokenPayload.sub);
        next();
    } catch (error) {
        next(error);
        
    }

}

export default jwtAuthenticationMiddleware;