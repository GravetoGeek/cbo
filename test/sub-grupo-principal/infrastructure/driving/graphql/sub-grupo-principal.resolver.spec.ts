import { Test, TestingModule } from '@nestjs/testing'
import { SubGrupoPrincipalResolver } from '@src/sub-grupo-principal/infrastructure/driving/graphql/sub-grupo-principal.resolver'

describe('SubGrupoPrincipalResolver', () => {
    let resolver: SubGrupoPrincipalResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SubGrupoPrincipalResolver],
        }).compile()

        resolver = module.get<SubGrupoPrincipalResolver>(SubGrupoPrincipalResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
