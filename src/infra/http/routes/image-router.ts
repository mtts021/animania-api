import express, {Router } from 'express';
import { resolve } from 'path';
import ImageController from '../controllers/image-controller';

const imageRouter = Router();
const imageController = new ImageController();

const dir = resolve(__dirname, '..', '..', '..', '..', 'tmp', 'images');

imageRouter.get('/imagem/:name', express.static(dir), imageController.getImage);

export default imageRouter;
