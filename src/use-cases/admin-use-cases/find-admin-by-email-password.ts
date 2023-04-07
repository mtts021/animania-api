import Admin from 'app/entities/admin';
import AdminRepository from 'app/repositories/admin-repository';

export default class FindAdminByEmailAndPassword {
    constructor(private adminRepository: AdminRepository){}

    async execute(email: string, password: string): Promise< Admin> {
        const admin = await this.adminRepository.findByEmailAndPassword(email, password);
        if(!admin){
            throw new Error('Incorrect email or password');
        }


        return admin;
    }
}