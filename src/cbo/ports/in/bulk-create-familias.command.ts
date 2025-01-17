import {Inject,Injectable} from '@nestjs/common'
import {Familia} from '../../domain/model/entities/familia.entity'
import {FamiliaRepository} from '../../domain/model/familia.repository'

@Injectable()
export class BulkCreateFamiliasCommand {
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
        // await this.familiaRepository.bulkCreate(familias)
        const createdFamilias: Familia[] = []
        for (const familia of familias){
            try{
                const existing = await this.familiaRepository.findFamiliaByTitle(familia.title)
                if (existing) {
                    console.log(`Família "${familia.nome}" já existe. Ignorando.`)
                    continue
                }

                const created = await this.familiaRepository.create(familia)
                console.log(`Família "${created.title}" criada com sucesso!`)
            } catch (error) {
                console.error(`Erro ao criar a familia "${familia.title}":`,error)
            }
        }
        return createdFamilias
    }
}