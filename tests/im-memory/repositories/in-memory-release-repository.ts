import Release from '../../../src/app/entities/release';
import ReleaseRepository from '../../../src/app/repositories/release-repository';

export default class InMemoryReleaseRepository implements ReleaseRepository {
    public releases: Release[] = [];
    constructor() {
        const onePiece = new Release({
            id: 1,
            title: 'One Piece',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: ['Church'],
            totalEpisodes: 1322,
            nextEpisode: 1323,
            releaseDate: new Date('2023/08/03'),
            status: 'em andamento',
            season: 'outono',
            weeklyDay: 'domingo',
            likes: 123,
            dislikes: 9,
        });
        const mashle = new Release({
            id: 2,
            title: 'Mashle',
            pathImage: 'v1gecgve1ye7g17d23h.png',
            genres: ['Ação', 'aventura', 'romance'],
            streaming: ['Church'],
            totalEpisodes: 1322,
            nextEpisode: 1323,
            status: 'em andamento',
            season: 'outono',
            weeklyDay: 'domingo',
            likes: 500,
            dislikes: 1,
        });

        this.releases.push(onePiece, mashle);

    }
    async showAll(): Promise<Release[] | null>  {
        const releases = this.releases; 

        if(!releases) {
            return null;
        }

        return releases;
    }
}