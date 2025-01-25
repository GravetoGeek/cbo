// update-familia.handler.ts

import {Inject} from '@nestjs/common'
import {CommandHandler,ICommandHandler} from '@nestjs/cqrs'
import {Familia} from '../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../ports/out/familia-repository.interface'
import {UpdateFamiliaCommand} from './update-familia.command'

@CommandHandler(UpdateFamiliaCommand)
export class UpdateFamiliaHandler implements ICommandHandler<UpdateFamiliaCommand> {
    constructor(@Inject(FAMILIA_REPOSITORY)
    private readonly familiaRepository: FamiliaRepository) {}

    async execute(command: UpdateFamiliaCommand): Promise<Familia|null> {
        const {id,codigo,titulo}=command

        // 1) Verifica se a entidade existe
        const existing=await this.familiaRepository.getFamiliaById(id)
        if(!existing) {
            // Se não existir, retorne null ou lance uma exceção, conforme sua regra
            return null
        }

        // 2) Atualiza campos conforme enviados no command
        if(codigo!==undefined) {
            existing.codigo=codigo
        }
        if(titulo!==undefined) {
            existing.titulo=titulo
        }

        // 3) Salva no repositório
        const updated=await this.familiaRepository.updateFamilia(existing)

        // 4) Retorna a entidade atualizada
        return updated
    }
}
