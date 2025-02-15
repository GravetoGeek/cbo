import { Test, TestingModule } from '@nestjs/testing'
import { PerfilOcupacionalResolver } from '@src/perfil-ocupacional/infrastructure/driving/graphql/perfil-ocupacional.resolver'

describe('PerfilOcupacionalResolver', () => {
    let resolver: PerfilOcupacionalResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PerfilOcupacionalResolver],
        }).compile()

        resolver = module.get<PerfilOcupacionalResolver>(PerfilOcupacionalResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
