import { Module } from '@nestjs/common'
import { PerfilOcupacionalResolver } from '@src/perfil-ocupacional/infrastructure/driving/graphql/perfil-ocupacional.resolver'

@Module({
    providers: [PerfilOcupacionalResolver]
})
export class PerfilOcupacionalModule {}
