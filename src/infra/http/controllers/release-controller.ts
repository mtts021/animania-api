import { NextFunction, Request, Response } from 'express';
import PrismaPremiereRepository from '../../database/repositories/prisma-release-repository';
import ShowAllRelease from '../../../use-cases/release-use-cases/show-all-release';
import { ReleaseModelView } from '../model-view/release-model-view';
import {filtersReleaseSchema} from '../schemas/filters-release-schema';


export default class ReleaseController {
    async showAll(req: Request, res: Response, next: NextFunction) {
        const releaseRepository = new PrismaPremiereRepository();
        const showAllRelease = new ShowAllRelease(releaseRepository);
        const filters = req.query;

        try {
            await filtersReleaseSchema.validateAsync(filters);
        } catch (error) {
            return res.status(400).json({ error: error.message.replace(/['"]/g, '') });
        }

        try {
            const releases = await showAllRelease.execute(filters);
            const releasesToHttp = releases.map(ReleaseModelView.toHttp);
            return res.status(200).json(releasesToHttp);
        } catch (error) {
            next(error);
        }

    }
}