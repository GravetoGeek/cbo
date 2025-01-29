import { Module } from '@nestjs/common'
import { OcupacaoResolver } from '@src/ocupacao/infrastructure/driving/graphql/ocupacao.resolver'

@Module({
    providers: [OcupacaoResolver]
})
export class OcupacaoModule {}
