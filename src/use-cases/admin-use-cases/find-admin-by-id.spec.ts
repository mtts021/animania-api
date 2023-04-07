import InMemoryAdminRepository from '../../../tests/im-memory/repositories/in-memory-admin-repository';
import FindByIdAdmin  from './find-admin-by-id';


describe('Find By Id Admin', ()=> {
    const adminRepository = new InMemoryAdminRepository();
    const findByIdAdmin = new FindByIdAdmin(adminRepository);
    
    it('should be able to find a admin by id', async()=> {
        const admin = await findByIdAdmin.execute(1);
        expect(admin).toEqual(admin);
    });
    it('should not be able to find by slug a non existing admin', async()=> {
        expect(async ()=> {
            await findByIdAdmin.execute(3);
        }).toThrowError;
    });
});