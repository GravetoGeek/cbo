import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo'
import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import * as path from 'path'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {CboModule} from './cbo/cbo.module'
import {DatabaseModule} from './database/database.module'
import {PrismaService} from './database/prisma/prisma.service'

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: path.resolve(process.cwd(),'src/database/prisma/schema.gql'),
            driver: ApolloDriver,
            sortSchema: true,
            debug: true,
            playground: true,
            introspection: true,
            installSubscriptionHandlers: true,
        }),
        DatabaseModule,
        CboModule,
    ],
    controllers: [AppController],
    providers: [AppService,PrismaService],
})
export class AppModule {

}
