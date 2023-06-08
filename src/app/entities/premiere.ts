import { Replace } from 'app/helpers/replace';

export interface premiereProps {
    id: number
    title: string
    pathImage: string
    genres: string[]
    streaming: string
    totalEpisodes: number
    currentEpisode: number
    releaseDate: Date
    isAiring: string
    season: number
    weeklyDayAiring: string
    likes: number
    deslikes: number
    createdAt: Date
}

export default class Premiere {
    protected props: premiereProps;

    constructor(props: Replace<premiereProps, {createdAt?: Date}>){
        this.props ={
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

}