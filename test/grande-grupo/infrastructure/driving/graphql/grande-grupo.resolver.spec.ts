import { Test, TestingModule } from '@nestjs/testing'
import { GrandeGrupoResolver } from '@src/grande-grupo/infrastructure/driving/graphql/grande-grupo.resolver'

describe('GrandeGrupoResolver', () => {
    let resolver: GrandeGrupoResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GrandeGrupoResolver],
        }).compile()

        resolver = module.get<GrandeGrupoResolver>(GrandeGrupoResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
