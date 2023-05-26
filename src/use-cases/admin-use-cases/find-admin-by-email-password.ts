import Admin from 'app/entities/admin';
import {BadRequestError} from '../../app/helpers/api-error';
import AdminRepository from 'app/repositories/admin-repository';
import bcrypt from 'bcrypt';

export default class FindAdminByEmailAndPassword {
    constructor(private adminRepository: AdminRepository){}

    async execute(email: string, password: string): Promise< Admin> {
        const admin = await this.adminRepository.findByEmail(email);
        if(!admin){
            throw new BadRequestError('Incorrect email');
        }
        const passwordHash = admin.password;
        const checkPassword = await bcrypt.compare(password, passwordHash);
        if(!checkPassword) {
            throw new BadRequestError('Incorrect password');
        }


        return admin;
    }
}