import { PrismaClient } from '@prisma/client';
import Admin from '../../../app/entities/admin';
import AdminRepository from '../../../app/repositories/admin-repository';
import {PrismaAdminMapper } from '../mappers/prisma-admin-mapper';

export class PrismaAdminRepository implements AdminRepository{
    private prisma = new PrismaClient();
    async findById(adminId: number): Promise<Admin | null> {
        const admin = await this.prisma.admin.findUnique({
            where: {
                id: adminId
            }
        });
        if(!admin){
            return null;
        }

        return PrismaAdminMapper.toDomain(admin);
    }
    async findByEmail(email: string): Promise<Admin | null> {
        const admin = await this.prisma.admin.findUnique({
            where: {
                email
            }
        });
        if(!admin){
            return null;
        }
        
        return PrismaAdminMapper.toDomain(admin);
    }
}