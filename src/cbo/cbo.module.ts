import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'


@Module({
    imports: [
        DatabaseModule, // <-- importantíssimo: importamos o DatabaseModule
    ],
    controllers: [],
    providers: [],
})
export class CboModule {}
