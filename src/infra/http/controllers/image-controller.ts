import { NotFoundError } from '../../../app/helpers/api-error';
import { Request, Response, NextFunction } from 'express';
import {resolve} from 'path';
import FindImage from '../../../use-cases/image-use-cases/find-image';

export default class ImageController {
    directory: string; // Declare o tipo da propriedade

    constructor(directory: string) {
        this.directory = directory; // Inicialize a propriedade no construtor
    }
    async getImage(req: Request, res: Response, next: NextFunction) {
        const nameImage = req.params.name;
        const pathImage = resolve(__dirname, '..', '..', '..', '..', 'tmp', this.directory, nameImage + '.jpg');
        const findImage = new FindImage();
        const existImage = await findImage.execute(pathImage);
        if(!existImage) {
            const error = new NotFoundError('Image not found');
            next(error);
            return;
        }
        res.sendFile(pathImage);
    }
}