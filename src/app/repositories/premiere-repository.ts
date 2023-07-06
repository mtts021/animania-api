/* eslint-disable semi */
import Premiere from 'app/entities/premiere';

export default interface PremiereRepository {
   showAll(): Promise<Premiere[] | null>
}