import { describe, expect, it } from 'vitest';
import ShowAllPremiere from './show-all-premiere';
import InMemoryPremiereRepository from '../../../tests/im-memory/repositories/in-memory-premiere-repository';


describe('Show All Premieres', () => {
    it('should be able to possible show all the Premieres ', async () => {
        const PremiereRepository = new InMemoryPremiereRepository();
        const showAllPremiere = new ShowAllPremiere(PremiereRepository);
        const Premieres = await showAllPremiere.execute();
        
        expect(Premieres).toBe(PremiereRepository.premiere);
    });

    it('deve retornar null se não tiver lançamentos', async () => {
        const premiereRepository = new InMemoryPremiereRepository();
        const showAllPremiere = new ShowAllPremiere(premiereRepository);
        premiereRepository.premiere = [];
        const premieres = await showAllPremiere.execute();

        expect(premieres).toBeNull;
    });
});