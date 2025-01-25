// familia/application/usecases/queries/get-familia-by-id.handler.ts
import {Inject} from '@nestjs/common'
import {IQueryHandler,QueryHandler} from '@nestjs/cqrs'
import {Familia} from '../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {GetFamiliaByIdQuery} from './get-familia-by-id.query'

/**
 * Handler para "GetFamiliaByIdQuery"
 */
@QueryHandler(GetFamiliaByIdQuery)
export class GetFamiliaByIdHandler implements IQueryHandler<GetFamiliaByIdQuery> {
    constructor(@Inject(FAMILIA_REPOSITORY) private readonly familiaRepository: FamiliaRepository) {}

    async execute(query: GetFamiliaByIdQuery): Promise<Familia|null> {
        const {id}=query
        return this.familiaRepository.getFamiliaById(id)
    }
}
