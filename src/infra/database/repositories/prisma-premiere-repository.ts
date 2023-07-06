import { PrismaClient } from '@prisma/client';
import Premiere from 'app/entities/premiere';
import PremiereRepository from 'app/repositories/premiere-repository';
import { PrismaPremiereMapper } from '../mappers/prisma-premiere-mapper';


export default class PrismaPremiereRepository implements PremiereRepository {
    private prisma = new PrismaClient();
  
    async showAll(): Promise<Premiere[]> {
        const premieres = await this.prisma.premiere.findMany();

        return premieres.map(PrismaPremiereMapper.toDomain);
    }

}