import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.admin.upsert({
        where: {email: 'admin@email.com'},
        update: {},
        create: {
            email: 'admin@email.com',
            password: '$2a$12$I6LREMEcp8.FfOLM6U3rU.OyA22D3p3LbfRdhQ.h2hkbSQmaZaMte', /* senha123 */
        },
    });
    const admin2 = await prisma.admin.upsert({
        where: {email: 'admin2@email.com'},
        update: {},
        create: {
            email: 'admin2@email.com',
            password: '$2a$12$mt1D27HIWDL0H8PnSQeWvO.4oEVE.Bj3HQXzOk7aHyOZqmKMlFVp.' /* senha456 */
        }
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
        
