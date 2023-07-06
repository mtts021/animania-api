import { NextFunction, Request, Response } from 'express';
import PrismaPremiereRepository from '../../database/repositories/prisma-premiere-repository';
import ShowAllPremiere from '../../../use-cases/release-use-cases/show-all-premiere';
import { PremiereModelView } from '../model-view/premiere-model-view';


export default class PremiereController {
    async showAll(req: Request, res: Response, next: NextFunction) {
        const PremiereRepository = new PrismaPremiereRepository();
        const showAllPremiere = new ShowAllPremiere(PremiereRepository);

        try {
            const premieres = await showAllPremiere.execute();
            const premieresToHttp = premieres.map(PremiereModelView.toHttp);
            return res.status(200).json(premieresToHttp);
        } catch (error) {
            next(error);
        }

    }
}