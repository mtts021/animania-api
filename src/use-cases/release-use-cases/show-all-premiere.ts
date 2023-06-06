import Premiere from 'app/entities/premiere';
import PremiereRepository from 'app/repositories/premiere-repository';

export default class ShowAllRelease {
    constructor(private premiereRepository: PremiereRepository){}

    async execute(): Promise<Premiere[] | null> {
        const premiere = await this.premiereRepository.showAll();

        return premiere
    }
}