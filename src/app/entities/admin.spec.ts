import Admin from './admin';
import {describe, it, expect} from 'vitest';

describe('Entity Admin', () => {
    it('should be able create a instance of Admin', () => {
        const admin  = new Admin({
            id: 1,
            email: 'johndoe@email.com',
            password: 'this_is_a_password'
        });
    
        expect(admin).toBeInstanceOf(Admin);
    });

    it('should not be able to create a admin with password less than 8 characters', () => {
       
        expect(() => {
            new Admin({
                id: 1,
                email: 'johndoe@email.com',
                password: '1234567'
            });
        }).toThrow();
    });

});
