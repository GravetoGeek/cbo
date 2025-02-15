import { Module } from '@nestjs/common'
import { SubGrupoResolver } from '@src/sub-grupo/infrastructure/driving/graphql/sub-grupo.resolver'

@Module({
    providers: [SubGrupoResolver]
})
export class SubGrupoModule {}
