// list-familias.handler.ts

import {Inject} from '@nestjs/common'
import {IQueryHandler,QueryHandler} from '@nestjs/cqrs'
import {Familia} from '../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {ListFamiliasQuery} from './list-familias.query'

/**
 * Handler responsável por processar a ListFamiliasQuery
 * e retornar o array de entidades Familia.
 */
@QueryHandler(ListFamiliasQuery)
export class ListFamiliasHandler implements IQueryHandler<ListFamiliasQuery> {
    constructor(
        @Inject(FAMILIA_REPOSITORY) private readonly familiaRepository: FamiliaRepository,
    ) {}

    // O método 'execute' é chamado quando a query é disparada
    async execute(): Promise<Familia[]> {
        // Chama o repositório para obter todas as famílias
        const familias=await this.familiaRepository.listFamilias()
        return familias
    }
}
