import Release, {seasonType, weeklyDayType} from 'app/entities/release';
import ReleaseRepository from 'app/repositories/release-repository';

interface RequestReleaseFilters {
    season?: seasonType
    weekly_day?: weeklyDayType
}

export default class ShowAllRelease {
    constructor(private releaseRepository: ReleaseRepository){}

    async execute(request: RequestReleaseFilters): Promise<Release[] | null> {
        const releases = await this.releaseRepository.showAll(request);
        return releases;
    }
}