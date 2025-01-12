import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo'
import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import * as path from 'path'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {DatabaseModule} from './database/database.module'

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
