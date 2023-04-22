import Admin from '../../../src/app/entities/admin';
import AdminRepository from '../../../src/app/repositories/admin-repository';

    
export default class InMemoryAdminRepository implements AdminRepository {
    public admin: Admin[] = [];
    constructor() {
        const admin1 = new Admin({id:1, email: 'johndoe@email.com', password: '$2a$12$HgowH8JQ7WnvtNtNS94bR..uKbZ3lDmD5GGjj1p2IFMsAy.L4NlNa' //password=senha123 
        });
        const admin2 = new Admin({id:2, email: 'thisisemail@email.com', password: '$2a$12$7h6nDAeOal6rcDqgDR8KlOXdDM6.Q7VqIIIkX1Vkri84XBV3OeW4.' //password=senha456
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
    
    async findByEmail(email: string): Promise<Admin | null>{
        const admin =  this.admin.find(admin => admin.email == email);

        if(!admin){
            return null;
        }
        
        return admin;
    }


}