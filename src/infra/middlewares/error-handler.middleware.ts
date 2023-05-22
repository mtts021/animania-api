import {Request, Response, NextFunction } from 'express';
import {BadRequestError, NotFoundError, UnauthorizedError, } from '../../app/helpers/api-error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if(error instanceof NotFoundError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }
    if(error instanceof BadRequestError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }
    if(error instanceof UnauthorizedError) {
        return res.status(error.statusCode).json({
            message: error.message
        });
    }


    return res.status(500).json({
        message: `Internal seerver error - ${error}`
    });
}

export default errorHandler;