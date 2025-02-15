import { Module } from '@nestjs/common'
import { SinonimoResolver } from '@src/sinonimo/infrastructure/driving/graphql/sinonimo.resolver'

@Module({
    providers: [SinonimoResolver]
})
export class SinonimoModule {}
