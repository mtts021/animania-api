import InMemoryAdminRepository from '../../../tests/im-memory/repositories/in-memory-admin-repository';
import FindAdminByEmailAndPassword from './find-admin-by-email-password';

describe('Find Admin by  and password', ()=> {
    it('should be able to find a admin by email e password', async()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        const admin = await findAdminByEmailAndPassword.execute('johndoe@gmail.com','6579e96f76baa00787a28653876c6127' );
        expect(admin).toEqual(admin);
    });

    it('should not be able to find a admin with incorrect password', async ()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        await expect(findAdminByEmailAndPassword.execute('example-username-fake', '6579e96f76baa00787a28653876c6127')).rejects.toThrowError();
        
    });
    it('should not be able to find a admin with incorrect email', async()=> {
        const adminRepository = new InMemoryAdminRepository();
        const findAdminByEmailAndPassword = new FindAdminByEmailAndPassword(adminRepository);
        
        await expect(findAdminByEmailAndPassword.execute('example-username-fake', '6579e96f76baa00787a28653876c6127')).rejects.toThrowError();
    });
    
});