// bulk-create-familias.handler.ts
import {Inject} from '@nestjs/common'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import {Familia} from '../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {BulkCreateFamiliasCommand} from './bulk-create-familias.command'

/**
 * Handler que processa o comando de criação em lote de Famílias.
 */
@CommandHandler(BulkCreateFamiliasCommand)
export class BulkCreateFamiliasHandler implements ICommandHandler<BulkCreateFamiliasCommand> {
    constructor(
        @Inject(FAMILIA_REPOSITORY) private readonly familiaRepository: FamiliaRepository,
    ) {}

    async execute(command: BulkCreateFamiliasCommand): Promise<Familia[]> {
        const {familias}=command

        // 1) Converte cada item em uma entidade de domínio 'Familia'
        const familiaEntities=familias.map(f => {return new Familia(f)})

        // 2) Chama o repositório para persistir em lote
        const createdFamilias=await this.familiaRepository.bulkCreateFamilias(familiaEntities)

        // 3) Retorna as entidades criadas (ou parcialmente criadas)
        return createdFamilias
    }
}
