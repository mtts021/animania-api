import Premiere from '../../../src/app/entities/premiere';
import ReleaseRepository from '../../../src/app/repositories/premiere-repository';

export default class InMemoryReleaseRepository implements ReleaseRepository {
    public premiere: Premiere[] = [];
    constructor() {
        const onePiece = new Premiere({
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
        const mashle = new Premiere({
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

        this.premiere.push(onePiece, mashle);

    }
    async showAll(): Promise<Premiere[] | null>  {
        const premiere = this.premiere; 

        if(!premiere) {
            return null;
        }

        return premiere;
    }
}