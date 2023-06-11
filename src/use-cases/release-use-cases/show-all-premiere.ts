import Premiere from 'app/entities/premiere';
import PremiereRepository from 'app/repositories/premiere-repository';

export default class ShowAllPremiere {
    constructor(private premiereRepository: PremiereRepository){}

    async execute(): Promise<Premiere[] | null> {
        const premiere = await this.premiereRepository.showAll();
        return premiere;
    }
}