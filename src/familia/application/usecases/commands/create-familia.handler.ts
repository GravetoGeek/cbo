// familia/application/usecases/commands/create-familia.handler.ts
import {Inject} from '@nestjs/common'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import {Familia} from '../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {CreateFamiliaCommand} from './create-familia.command'

/**
 * Handler que processa o 'CreateFamiliaCommand'
 * e invoca o repositório para persistir a entidade.
 */
@CommandHandler(CreateFamiliaCommand)
export class CreateFamiliaHandler implements ICommandHandler<CreateFamiliaCommand> {
    constructor(@Inject(FAMILIA_REPOSITORY)
    private readonly familiaRepository: FamiliaRepository) {}

    async execute(command: CreateFamiliaCommand): Promise<Familia> {
        // 1) Converter o command em entidade de domínio
        const familia=new Familia(command)
        // 2) Persistir no repositório
        const created=await this.familiaRepository.createFamilia(familia)
        // 3) Retornar a entidade criada (ou um DTO, caso queira)
        return created
    }
}
