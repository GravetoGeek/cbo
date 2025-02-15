import { Test, TestingModule } from '@nestjs/testing'
import { SubGrupoResolver } from '@src/sub-grupo/infrastructure/driving/graphql/sub-grupo.resolver'

describe('SubGrupoResolver', () => {
    let resolver: SubGrupoResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SubGrupoResolver],
        }).compile()

        resolver = module.get<SubGrupoResolver>(SubGrupoResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
