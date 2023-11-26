import Release from 'app/entities/release';

export class ReleaseModelView {
    static toHttp(release: Release) {
        return {
            id: release.id,
            title: release.title,
            pathImage: release.pathImage,
            genres: release.genres,
            streaming: release.streaming,
            totalEpisodes: release.totalEpisodes,
            nextEpisode: release.nextEpisode,
            releaseDate: release.releaseDate,
            status: release.status,
            season: release.season,
            weeklyDay: release.weeklyDay,
            likes: release.likes,
            dislikes: release.dislike,
            createdAt: release.createdAt,
            updatedAt: release.updatedAt
        };
    }
}