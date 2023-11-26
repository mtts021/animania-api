import { describe, expect, it } from 'vitest';
import Release from './release';

describe('Entitie Release', () => {
    it('should be able create a instance of Release', () => {
        const release = new Release({
            id: 1,
            title: 'One Piece',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: ['Church'],
            totalEpisodes: 1322,
            nextEpisode: 1323,
            releaseDate: new Date('2023/08/03'),
            status: 'em andamento',
            season: 'primavera',
            weeklyDay: 'domingo',
            likes: 123,
            dislikes: 9,
        });

        expect(release).instanceOf(Release);
    });
    it('should be able create a instance of Release without nextEpisode attribute', () => {
        const release = new Release({
            id: 1,
            title: 'One Piece',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: ['Church'],
            totalEpisodes: 1322,
            nextEpisode: 1323,
            releaseDate: new Date('2023/08/03'),
            status: 'em andamento',
            season: 'primavera',
            weeklyDay: 'domingo',
            likes: 123,
            dislikes: 9,
        });

        expect(release).instanceOf(Release);
    });
});