import {Test,TestingModule} from '@nestjs/testing'
import {FamiliaResolver} from '@src/familia/infrastructure/driving/graphql/familia.resolver'

describe('FamiliaResolver', () => {
    let resolver: FamiliaResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FamiliaResolver],
        }).compile()

        resolver = module.get<FamiliaResolver>(FamiliaResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
