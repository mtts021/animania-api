import { NextFunction, Request, Response } from 'express';
import PrismaPremiereRepository from '../../database/repositories/prisma-premiere-repository';
import ShowAllPremiere from '../../../use-cases/release-use-cases/show-all-premiere';


export default class PremiereController {
    async showAll(req: Request, res: Response, next: NextFunction) {
        const PremiereRepository = new PrismaPremiereRepository();
        const showAllPremiere = new ShowAllPremiere(PremiereRepository);

        try {
            const premiere = await showAllPremiere.execute();
            return res.status(200).json(premiere);
        } catch (error) {
            next(error);
        }

    }
}