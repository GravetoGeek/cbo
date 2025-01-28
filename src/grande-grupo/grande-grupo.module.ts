import { Module } from '@nestjs/common'
import { GrandeGrupoResolver } from '@src/grande-grupo/infrastructure/driving/graphql/grande-grupo.resolver'

@Module({
    providers: [GrandeGrupoResolver]
})
export class GrandeGrupoModule {}
