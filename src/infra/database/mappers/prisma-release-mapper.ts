import { release as RawRelease } from '@prisma/client';
import Release, {seasonType, statusType, weeklyDayType} from '../../../app/entities/release';



export class PrismaPremiereMapper {
    static toDomain(raw: RawRelease){
        return new Release({
            id: raw.id,
            title: raw.title,
            pathImage: raw.path_image,
            genres: raw.genres,
            streaming: raw.streaming,
            totalEpisodes: raw.total_episodes,
            nextEpisode: raw.next_episode,
            releaseDate: raw.release_date,
            status: <statusType>raw.status,
            season: <seasonType>raw.season,
            weeklyDay: <weeklyDayType>raw.weekly_day,
            likes: raw.likes,
            dislikes: raw.dislikes,
            createdAt: raw.created_at,
            updatedAt: raw.updated_at
        });
    }
}