import { Test, TestingModule } from '@nestjs/testing'
import { SinonimoResolver } from '@src/sinonimo/infrastructure/driving/graphql/sinonimo.resolver'

describe('SinonimoResolver', () => {
    let resolver: SinonimoResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SinonimoResolver],
        }).compile()

        resolver = module.get<SinonimoResolver>(SinonimoResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
