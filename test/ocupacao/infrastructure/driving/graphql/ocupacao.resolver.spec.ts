import { Test, TestingModule } from '@nestjs/testing'
import { OcupacaoResolver } from '@src/ocupacao/infrastructure/driving/graphql/ocupacao.resolver'

describe('OcupacaoResolver', () => {
    let resolver: OcupacaoResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OcupacaoResolver],
        }).compile()

        resolver = module.get<OcupacaoResolver>(OcupacaoResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
