import {Args,Mutation,Query,Resolver} from '@nestjs/graphql'
import {CreateFamiliaDto} from '@src/familia/application/dtos/create-familia.dto'
import {FamiliaResponseDto} from '@src/familia/application/dtos/familia-response.dto'
import {UpdateFamiliaDto} from '@src/familia/application/dtos/update-familia.dto'
import {FamiliaApplicationService} from '@src/familia/application/services/familia-application.service'

/**
 * Resolver responsável por expor as operações
 * (Queries e Mutations) relacionadas a 'Família' via GraphQL.
 */
@Resolver(() => {return FamiliaResponseDto})
export class FamiliaResolver {
    constructor(
        private readonly familiaAppService: FamiliaApplicationService,
    ) {}

    /**
     * Consulta todas as Famílias cadastradas.
     */
    @Query(() => {return [FamiliaResponseDto]})
    async listFamilias(): Promise<FamiliaResponseDto[]> {
        return this.familiaAppService.listFamilias()
    }

    /**
     * Consulta uma Família específica pelo ID.
     */
    @Query(() => {return FamiliaResponseDto},{nullable: true})
    async getFamiliaById(@Args('id') id: string): Promise<FamiliaResponseDto|null> {
        return this.familiaAppService.getFamiliaById(id)
    }

    /**
     * Cria uma nova Família (mutation).
     * @param data Objeto contendo o código e título da família.
     */
    @Mutation(() => {return FamiliaResponseDto})
    async createFamilia(
        @Args('data') data: CreateFamiliaDto,
    ): Promise<FamiliaResponseDto> {
        return this.familiaAppService.createFamilia(data)
    }

    /**
     * Atualiza os dados de uma Família existente.
     * @param id Identificador da Família que será atualizada.
     * @param data Dados de atualização.
     */
    @Mutation(() => {return FamiliaResponseDto},{nullable: true})
    async updateFamilia(
        @Args('id') id: string,
        @Args('data') data: UpdateFamiliaDto,
    ): Promise<FamiliaResponseDto|null> {
        data.id=id
        return this.familiaAppService.updateFamilia(data)
    }

    /**
     * Remove uma Família pelo ID.
     * Retorna true se conseguiu remover, ou false se não encontrou.
     */
    @Mutation(() => {return Boolean})
    async deleteFamilia(@Args('id') id: string): Promise<boolean> {
        return this.familiaAppService.deleteFamilia(id)
    }
}
