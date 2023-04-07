import Admin from 'app/entities/admin';
import AdminRepository from 'app/repositories/admin-repository';

export default class FindByIdAdmin {
    constructor(private adminRepository: AdminRepository){}

    async execute(adminId: number): Promise<Admin>  {
        const admin = await this.adminRepository.findById(adminId);

        if(!admin) {
            throw new Error('Admin not found');
        }

        return admin;
    }
}