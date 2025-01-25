import {Inject,Injectable} from '@nestjs/common'
import {PrismaService} from '@src/database/infrastructure/driven/persistence/prisma/prisma.service'
import {Familia} from '../../../../domain/model/entities/familia.entity'
import {FAMILIA_REPOSITORY,FamiliaRepository} from '../../../../ports/out/familia-repository.interface'
// (Exemplo de import, depende de como e onde você definiu o PrismaService)

@Injectable()
export class FamiliaPrismaRepository implements FamiliaRepository {
    constructor(@Inject('PRISMA_SERVICE') private readonly prismaService: PrismaService) {}

    /**
     * Cria uma nova família no banco de dados.
     * @param familia Dados da família a ser criada.
     * @returns Família criada.
     */
    async createFamilia(familia: Familia): Promise<Familia> {
        const created=await this.prismaService.familia.create({
            data: {
                codigo: familia.codigo,
                titulo: familia.titulo,
            }
        })
        // Atualiza a entidade de domínio com o ID gerado
        familia.id=created.id
        return familia
    }

    async updateFamilia(familia: Familia): Promise<Familia> {
        const updated=await this.prismaService.familia.update({
            where: {id: familia.id},
            data: {
                codigo: familia.codigo,
                titulo: familia.titulo,
            }
        })
        // Certifique-se de retornar a entidade de domínio atualizada
        return {
            ...familia,
            id: updated.id,
            codigo: updated.codigo,
            titulo: updated.titulo,
        }
    }

    async deleteFamilia(id: string): Promise<void> {
        await this.prismaService.familia.delete({
            where: {id},
        })
    }

    async getFamiliaById(id: string): Promise<Familia|null> {
        const familiaRecord=await this.prismaService.familia.findUnique({
            where: {id},
        })
        if(!familiaRecord) {
            return null
        }
        return {
            id: familiaRecord.id,
            codigo: familiaRecord.codigo,
            titulo: familiaRecord.titulo,
        }
    }

    async listFamilias(): Promise<Familia[]> {
        const familiaRecords=await this.prismaService.familia.findMany()
        return familiaRecords.map(fr => {
            return {
                id: fr.id,
                codigo: fr.codigo,
                titulo: fr.titulo,
            }
        })
    }

    /**
     * Encontra uma família pelo título.
     * @param titulo Título da família.
     * @returns Família encontrada ou null se não existir.
     */
    async findFamiliaByTitle(title: string): Promise<Familia[]> {
        const familiaRecords=await this.prismaService.familia.findMany({
            where: {titulo: title},
        })
        return familiaRecords.map(fr => {
            return {
                id: fr.id,
                codigo: fr.codigo,
                titulo: fr.titulo,
            }
        })
    }

    /**
     * Criação em lote de famílias.
     * @param familias Lista de famílias a serem criadas.
     * @returns Lista de famílias criadas.
     */
    async bulkCreateFamilias(familias: Familia[]): Promise<Familia[]> {
        // 1) Cria várias famílias de uma vez
        await this.prismaService.familia.createMany({
            data: familias.map(f => {return {
                codigo: f.codigo,
                titulo: f.titulo,
            }}),
        })

        // 2) Buscar novamente as famílias criadas (assumindo que 'codigo' seja único)
        const codigos=familias.map(f => {return f.codigo})
        const createdRecords=await this.prismaService.familia.findMany({
            where: {
                codigo: {
                    in: codigos,
                },
            },
        })

        // 3) Mapeia para a entidade 'Familia'
        return createdRecords.map(fr => {return {
            id: fr.id,
            codigo: fr.codigo,
            titulo: fr.titulo,
        }})
    }

}
