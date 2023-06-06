export interface premiereProps {
    id: number
    title: string
    path_image: string
    genre: string[]
    streaming: string
    totalEpisodes: number
    currentEpisode: number
    releaseDate: Date
    isAiring: string
    season: number
    weeklyDayAiring: string
    likes: number
    deslikes: number
}

export default class Premiere {
    protected props: premiereProps;

    constructor(props: premiereProps){
        this.props = props;
    }

}