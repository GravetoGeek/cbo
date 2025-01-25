import {Module} from '@nestjs/common'
import {CqrsModule} from '@nestjs/cqrs'
import {DatabaseModule} from '@src/database/database.module'
import {FamiliaApplicationService} from '@src/familia/application/services/familia-application.service'
import {FamiliaPrismaRepository} from '@src/familia/infrastructure/driven/persistence/repositories/familia-prisma.repository.impl'
import {FamiliaResolver} from '@src/familia/infrastructure/driving/graphql/familia.resolver'
import {BulkCreateFamiliasHandler} from './application/usecases/commands/bulk-create-familias.handler'
import {CreateFamiliaHandler} from './application/usecases/commands/create-familia.handler'
import {DeleteFamiliaHandler} from './application/usecases/commands/delete-familia.handler'
import {UpdateFamiliaHandler} from './application/usecases/commands/update-familia.handler'
import {GetFamiliaByIdHandler} from './application/usecases/queries/get-familia-by-id.handler'
import {ListFamiliasHandler} from './application/usecases/queries/list-familias.handler'
import {FAMILIA_REPOSITORY,FamiliaRepository} from './ports/out/familia-repository.interface'

const CommandHandlers = [
    CreateFamiliaHandler,
    UpdateFamiliaHandler,
    DeleteFamiliaHandler,
    BulkCreateFamiliasHandler,
]

const QueryHandlers = [
    ListFamiliasHandler,
    GetFamiliaByIdHandler,
]

@Module({
    imports: [CqrsModule,DatabaseModule],
    controllers: [],
    providers: [
        FamiliaResolver,
        {
            // Diz ao Nest: "Sempre que alguém precisar de FamiliaRepository,
            // use o FamiliaPrismaRepository."
            provide: FAMILIA_REPOSITORY,
            useClass: FamiliaPrismaRepository,
        },
        FamiliaApplicationService,
        ...CommandHandlers,
        ...QueryHandlers,
    ],
    exports: [FamiliaApplicationService],
})
export class FamiliaModule {}
