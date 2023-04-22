/* eslint-disable semi */
import Admin from 'app/entities/admin';

export default interface AdminRepository {
    findById(adminId: number): Promise<Admin>
    findByEmail(email: string): Promise<Admin>
}

