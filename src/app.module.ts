import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo'
import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import * as path from 'path'
import {AppController} from '@src/app.controller'
import {AppService} from '@src/app.service'
import {DatabaseModule} from '@src/database/database.module'
import {PrismaService} from '@src/database/infrastructure/driven/persistence/prisma/prisma.service'
import {FamiliaModule} from '@src/familia/familia.module'
import {GrandeGrupoModule} from '@src/grande-grupo/grande-grupo.module'
import {OcupacaoModule} from '@src/ocupacao/ocupacao.module'
import {PerfilOcupacionalModule} from '@src/perfil-ocupacional/perfil-ocupacional.module'
import {SinonimoModule} from '@src/sinonimo/sinonimo.module'
import {SubGrupoPrincipalModule} from '@src/sub-grupo-principal/sub-grupo-principal.module'
import {SubGrupoModule} from '@src/sub-grupo/sub-grupo.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: path.resolve(process.cwd(),'src/database/infrastructure/driven/persistence/prisma/schema.gql'),
            driver: ApolloDriver,
            sortSchema: true,
            debug: true,
            playground: true,
            introspection: true,
            installSubscriptionHandlers: true,
        }),
        DatabaseModule,
        FamiliaModule,
        GrandeGrupoModule,
        OcupacaoModule,
        SinonimoModule,
        PerfilOcupacionalModule,
        SubGrupoModule,
        SubGrupoPrincipalModule,
    ],
    controllers: [AppController],
    providers: [AppService,PrismaService],
})
export class AppModule {

}
