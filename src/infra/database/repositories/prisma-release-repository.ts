import { PrismaClient } from '@prisma/client';
import ReleaseRepository, { ReleaseFilters } from 'app/repositories/release-repository';
import { PrismaPremiereMapper } from '../mappers/prisma-release-mapper';
import Release from 'app/entities/release';


export default class PrismaReleaseRepository implements ReleaseRepository {
    private prisma = new PrismaClient();
  
    async showAll(args: ReleaseFilters): Promise<Release[]> {
        const releases = await this.prisma.release.findMany({
            where: {
                ...args
            }
        });

        return releases.map(PrismaPremiereMapper.toDomain);
    }

}