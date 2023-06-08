import {premiere as RawPremiere} from '@prisma/client';
import Premiere from '../../../app/entities/premiere';



export class PrismaPremiereMapper {
    static toDomain(raw: RawPremiere){
        return new Premiere({
            id: raw.id,
            title: raw.title,
            pathImage: raw.path_image,
            genres: raw.genres,
            streaming: raw.streaming,
            totalEpisodes: raw.totalEpisodes,
            currentEpisode: raw.currentEpisode,
            releaseDate: raw.releaseDate,
            isAiring: raw.isAiring,
            season: raw.season,
            weeklyDayAiring: raw.weeklyDayAiring,
            likes: raw.likes,
            deslikes: raw.deslikes,
            createdAt: raw.createdAt

        });
    }
}