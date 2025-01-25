// application/dtos/familia-response.dto.ts
import {Field,ID,ObjectType} from '@nestjs/graphql'
import {IsNotEmpty,IsString} from 'class-validator'

/**
 * DTO (Data Transfer Object) para retornar as informações
 * de uma Família ao consumidor final (ex: camada de API).
 */
@ObjectType()
export class FamiliaResponseDto {
    /**
     * Identificador único da família.
     * (Substitua `string` por `number` se for o caso do seu banco/entidade)
     */
    @IsString()
    @IsNotEmpty()
    @Field(() => {return ID})
        id: string

    /**
     * código da família.
     */
    @IsString()
    @IsNotEmpty()
    @Field()
        codigo: string

    /**
     * Nome ou descrição da família.
     */
    @IsString()
    @IsNotEmpty()
    @Field()
        titulo: string

    /**
     * (Exemplo de campo adicional)
     * Se houver data de criação, última atualização, etc., inclua conforme necessário.
     */

    /**
     * Construtor para inicializar o DTO.
     * Pode ser opcional se você quiser usar apenas objetos "plain" (literais).
     */

    constructor({id,codigo,titulo}:{id: string,codigo: string,titulo: string}) {
        this.id = id
        this.codigo = codigo
        this.titulo = titulo
    }

    /**
     * Método auxiliar (estático) para converter uma entidade do domínio em DTO.
     * Caso suas entidades tenham mais propriedades, adapte conforme necessário.
     */
    static fromEntity({codigo,titulo,id}: { codigo: string, titulo: string,id?: string }): FamiliaResponseDto {
        return new FamiliaResponseDto({codigo,titulo,id})
    }
}
