// delete-familia.handler.ts
import {Inject} from '@nestjs/common'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {DeleteFamiliaCommand} from './delete-familia.command'

@CommandHandler(DeleteFamiliaCommand)
export class DeleteFamiliaHandler implements ICommandHandler<DeleteFamiliaCommand> {
    constructor(
        @Inject(FAMILIA_REPOSITORY) private readonly familiaRepository: FamiliaRepository,
    ) {}

    /**
     * Método que processa o Command e remove a família do repositório.
     * Caso queira retornar true/false, podemos fazer isso também.
     */
    async execute(command: DeleteFamiliaCommand): Promise<boolean> {
        const {id}=command

        // Primeiro podemos verificar se existe
        const existing=await this.familiaRepository.getFamiliaById(id)
        if(!existing) {
            // Se não encontrou, retorna false
            return false
        }

        // Se existe, deletamos
        await this.familiaRepository.deleteFamilia(id)
        return true
    }
}
