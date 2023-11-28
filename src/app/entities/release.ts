import { Replace } from 'app/helpers/replace';

export type statusType = 'em andamento' | 'finalizado' | 'cancelado' |'vai ao ar'
export type seasonType = 'inverno' | 'verão' | 'primavera' | 'outono'
export type weeklyDayType = 'segunda' | 'terça' | 'quarta' | 'quinta' | 'sexta' | 'sábado' | 'domingo'

export interface releaseProps {
    id: number
    title: string
    pathImage: string
    genres: string[]
    streaming: string[]
    totalEpisodes: number
    nextEpisode?: number
    releaseDate?: Date
    status: statusType
    season: seasonType
    weeklyDay: weeklyDayType
    likes: number
    dislikes: number
    createdAt: Date
    updatedAt?: Date
}

export default class Release {
    protected props: releaseProps;

    constructor(props: Replace<releaseProps, {createdAt?: Date}>){
        this.props ={
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    get id(): number {
        return this.props.id;
    }
    get title(): string {
        return this.props.title;
    }
    get pathImage(): string {
        return this.props.pathImage;
    }
    get genres(): string[]  {
        return this.props.genres;
    }
    get streaming(): string[] {
        return this.props.streaming;
    }
    get totalEpisodes(): number {
        return this.props.totalEpisodes;
    }
    get nextEpisode(): number {
        return this.props.nextEpisode;
    }
    get releaseDate(): Date {
        return this.props.releaseDate;
    }
    get status(): string {
        return this.props.status;
    }
    get season(): string {
        return this.props.season;
    }
    get weeklyDay(): string {
        return this.props.weeklyDay;
    }
    get likes(): number {
        return this.props.likes;
    }
    get dislike(): number {
        return this.props.dislikes;
    }
    get createdAt(): Date {
        return this.props.createdAt;
    }
    get updatedAt(): Date | null | undefined {
        return this.props.updatedAt;
    }


}