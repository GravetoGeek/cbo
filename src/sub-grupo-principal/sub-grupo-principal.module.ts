import { Module } from '@nestjs/common'
import { SubGrupoPrincipalResolver } from '@src/sub-grupo-principal/infrastructure/driving/graphql/sub-grupo-principal.resolver'

@Module({
    providers: [SubGrupoPrincipalResolver]
})
export class SubGrupoPrincipalModule {}
