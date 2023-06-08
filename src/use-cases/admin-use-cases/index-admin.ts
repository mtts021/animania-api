import FindAdminByEmailAndPassword from './find-admin-by-email-password';
import { PrismaAdminRepository } from '../../infra/database/repositories/prisma-admin-repository';
import FindByIdAdmin from './find-admin-by-id';

const adminRepository = new PrismaAdminRepository();

export class IndexAdmin {
    static findAdminById = new FindByIdAdmin(adminRepository);
    static findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
}