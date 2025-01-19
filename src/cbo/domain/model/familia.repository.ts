import {Injectable} from '@nestjs/common'
import {CreateFamilia} from 'src/cbo/ports/in/create-familia.interface'
import {PrismaService} from '../../../database/prisma/prisma.service'

@Injectable()
export class FamiliaRepository {
    constructor(private readonly prisma: PrismaService) {}

    /**
     * Cria uma nova família no banco de dados.
     * @param familia Dados da família a ser criada.
     * @returns Família criada.
     */
    async create(familia: CreateFamilia): Promise<CreateFamilia> {
        return this.prisma.familia.create({
            data: {
                codigo: familia.codigo,
                titulo: familia.titulo
            },
        })
    }

    /**
     * Encontra uma família pelo título.
     * @param titulo Título da família.
     * @returns Família encontrada ou null se não existir.
     */
    async findFamiliaByTitle(titulo: string): Promise<CreateFamilia|null> {
        return this.prisma.familia.findFirst({
            where: {titulo},
        })
    }

    /**
     * Criação em lote de famílias.
     * @param familias Lista de famílias a serem criadas.
     * @returns Lista de famílias criadas.
     */
    async bulkCreate(familias: CreateFamilia[]): Promise<CreateFamilia[]> {
        return this.prisma.$transaction(
            familias.map((familia) => {return this.prisma.familia.create({
                data: {
                    codigo: familia.codigo,
                    titulo: familia.titulo,
                },
            })}),
        )
    }
}
