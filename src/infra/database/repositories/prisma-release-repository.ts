import { PrismaClient } from '@prisma/client';
import ReleaseRepository from 'app/repositories/release-repository';
import { PrismaPremiereMapper } from '../mappers/prisma-release-mapper';
import Release from 'app/entities/release';


export default class PrismaReleaseRepository implements ReleaseRepository {
    private prisma = new PrismaClient();
  
    async showAll(): Promise<Release[]> {
        const releases = await this.prisma.release.findMany();

        return releases.map(PrismaPremiereMapper.toDomain);
    }

}