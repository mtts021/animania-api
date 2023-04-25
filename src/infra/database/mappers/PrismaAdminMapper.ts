import { admin as RawAdmin } from '@prisma/client';
import Admin from '../../../app/entities/admin';

export class PrismaAdminMapper {
    static toDomain(raw: RawAdmin): Admin {
        return new Admin({
            id: raw.id,
            email: raw.email,
            password: raw.password
        });
    }
}
