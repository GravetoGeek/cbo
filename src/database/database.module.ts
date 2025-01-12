import {Module} from '@nestjs/common'
import {PrismaResolver} from './prisma/prisma.resolver'
import {PrismaService} from './prisma/prisma.service'

@Module({
    providers: [PrismaService, PrismaResolver],
    exports: [PrismaService],
})
export class DatabaseModule {}
