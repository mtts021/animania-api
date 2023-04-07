/* eslint-disable semi */
import Admin from 'app/entities/admin';

export default interface AdminRepository {
    findById(adminId: number): Promise<Admin>
    findByEmailAndPassword(email: string, password: string): Promise<Admin>
}

