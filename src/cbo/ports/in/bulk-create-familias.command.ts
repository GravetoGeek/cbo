import {Inject,Injectable,Logger} from '@nestjs/common'
import {Familia} from '../../domain/model/entities/familia.entity'
import {FamiliaRepository} from '../../domain/model/familia.repository'

@Injectable()
export class BulkCreateFamiliasCommand {
    private readonly logger = new Logger(BulkCreateFamiliasCommand.name)

    constructor(
        @Inject('FamiliaRepository')
        private readonly familiaRepository: FamiliaRepository,
    ) {}

    /**
     * Executa o comando para criar múltiplas famílias.
     * @param familias Lista de objetos Familia para serem cadastradas.
     * @returns Lista de famílias cadastradas.
     */
    async execute(familias: Familia[]): Promise<Familia[]> {
        if (!familias || familias.length === 0) {
            this.logger.warn('Nenhuma família fornecida para criação.')
            return []
        }

        const createdFamilias: Familia[] = []

        for (const familia of familias) {
            try {
                // Verifica se a família já existe
                const existing = await this.familiaRepository.findFamiliaByTitle(familia.titulo)
                if (existing) {
                    this.logger.warn(`Família "${familia.titulo}" já existe. Ignorando.`)
                    continue
                }

                // Cria a nova família
                const created = await this.familiaRepository.create(familia)
                this.logger.log(`Família "${created.titulo}" criada com sucesso!`)
                createdFamilias.push(created)
            } catch (error) {
                this.logger.error(`Erro ao criar a família "${familia.titulo}":`, error)
            }
        }

        return createdFamilias
    }
}
