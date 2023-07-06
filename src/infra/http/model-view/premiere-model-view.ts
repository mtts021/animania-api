import Premiere from 'app/entities/premiere';

export class PremiereModelView {
    static toHttp(premiere: Premiere) {
        return {
            id: premiere.id,
            title: premiere.title,
            pathImage: premiere.pathImage,
            genres: premiere.genres,
            streaming: premiere.streaming,
            totalEpisodes: premiere.totalEpisodes,
            currentEpisode: premiere.currentEpisode,
            releaseDate: premiere.releaseDate,
            isAiring: premiere.isAiring,
            season: premiere.season,
            weeklyDayAiring: premiere.weeklyDayAiring,
            likes: premiere.likes,
            deslikes: premiere.deslike,
            createdAt: premiere.createdAt,
        };
    }
}