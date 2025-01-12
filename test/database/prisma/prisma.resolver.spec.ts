import {Test,TestingModule} from '@nestjs/testing'
import {PrismaResolver} from '../../../src/database/prisma/prisma.resolver'

describe('PrismaResolver', () => {
    let resolver: PrismaResolver

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrismaResolver],
        }).compile()

        resolver = module.get<PrismaResolver>(PrismaResolver)
    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })
})
