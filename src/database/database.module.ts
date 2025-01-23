import {Module} from '@nestjs/common'
import {PrismaService} from '@src/database/infrastructure/driven/persistence/prisma/prisma.service'
import {PrismaResolver} from '@src/database/infrastructure/driving/graphql/prisma.resolver'

@Module({
    providers: [
        {
            provide: 'PRISMA_SERVICE',
            useClass: PrismaService,
        },
        PrismaResolver
    ],
    exports: ['PRISMA_SERVICE'],
})
export class DatabaseModule {}
