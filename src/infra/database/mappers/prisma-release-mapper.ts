import { release as RawRelease } from '@prisma/client';
import Release from '../../../app/entities/release';



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
            status: <'em andamento' | 'finalizado' | 'cancelado' | 'vai ao ar'>raw.status,
            season: <'inverno' | 'verão' | 'primavera' | 'outono'>raw.season,
            weeklyDay: <'segunda' | 'terça' | 'quarta' | 'quinta' | 'sexta' | 'sábado' | 'domingo'>raw.weekly_day,
            likes: raw.likes,
            dislikes: raw.dislikes,
            createdAt: raw.created_at,
            updatedAt: raw.updated_at
        });
    }
}