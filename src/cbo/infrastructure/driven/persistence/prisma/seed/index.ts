// prisma/seed/index.ts
import { PrismaClient } from '@prisma/client'
import seed from './seed'
import process from 'process'

async function main() {
    const prisma = new PrismaClient()

    await prisma.$connect()

    await seed(prisma)

    await prisma.$disconnect()
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => {
        console.log('Finished seeding!')
    })
