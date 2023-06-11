import fs from 'fs/promises';



export default class FindImage {

    async execute(pathImage: string){
        try {
            await fs.access(pathImage, fs.constants.F_OK);
        } catch {
            return false;
        }

        return true;
    }
}