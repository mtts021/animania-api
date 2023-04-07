import Admin from '../../../src/app/entities/admin';
import AdminRepository from '../../../src/app/repositories/admin-repository';

    
export default class InMemoryAdminRepository implements AdminRepository {
    public admin: Admin[] = [];
    constructor() {
        const admin1 = new Admin(
            {id:1, email: 'johndoe@gmail.com', password: '6579e96f76baa00787a28653876c6127'
            });
        const admin2 = new Admin(
            {id:2, email: 'thisisemail@gmail.com', password: '8a828f90154aa3cdb701ab5632e45034'
            });

        this.admin.push(admin1, admin2);

    }
    async findById(adminId: number): Promise<Admin | null>  {
        const admin = this.admin.find(admin => admin.id = adminId);

        if(!admin) {
            return null;
        }

        return admin;
    }
    
    async findByEmailAndPassword(email: string, password: string): Promise<Admin | null>{
        const admin =  this.admin.find(admin => admin.email == email && admin.password == password);

        if(!admin){
            return null;
        }
        
        return admin;
    }


}