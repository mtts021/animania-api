import { describe, expect, it } from 'vitest';
import Premiere from './premiere';

describe('Entitie Release', () => {
    it('should be able create a instance of Release', () => {
        const premiere = new Premiere({
            id: 1,
            title: 'One Piece',
            path_image: 'v1gecgve1ye7g17d23h.png',
            genre: ['Ação', 'aventura', 'romance'],
            streaming: 'Church',
            totalEpisodes: 1322,
            currentEpisode: 4,
            releaseDate: new Date('2023/08/03'),
            isAiring: 'Em lançamento',
            season: 7,
            weeklyDayAiring: 'Domingo',
            likes: 123,
            deslikes: 9,

        });

        expect(premiere).instanceOf(Premiere);
    });
});