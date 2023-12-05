/* eslint-disable semi */
import Release, { seasonType, weeklyDayType } from 'app/entities/release';

export interface ReleaseFilters {
   season?: seasonType
   weekly_day?: weeklyDayType
}

export default interface ReleaseRepository {
   showAll(args: ReleaseFilters): Promise<Release[]>
}