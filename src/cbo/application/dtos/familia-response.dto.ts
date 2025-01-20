// application/dtos/familia-response.dto.ts
import {IsNotEmpty,IsString} from 'class-validator'

/**
 * DTO (Data Transfer Object) para retornar as informações
 * de uma Família ao consumidor final (ex: camada de API).
 */
export class FamiliaResponseDto {
    /**
     * Identificador único da família.
     * (Substitua `string` por `number` se for o caso do seu banco/entidade)
     */
    @IsString()
    @IsNotEmpty()
        id?: string

    /**
     * código da família.
     */
    @IsString()
    @IsNotEmpty()
        codigo: string

    /**
     * Nome ou descrição da família.
     */
    @IsString()
    @IsNotEmpty()
        titulo: string

    /**
     * (Exemplo de campo adicional)
     * Se houver data de criação, última atualização, etc., inclua conforme necessário.
     */

    /**
     * Construtor para inicializar o DTO.
     * Pode ser opcional se você quiser usar apenas objetos "plain" (literais).
     */

    constructor(id: string,codigo: string, titulo: string) {
        this.id = id
        this.codigo = codigo
        this.titulo = titulo
    }

    /**
     * Método auxiliar (estático) para converter uma entidade do domínio em DTO.
     * Caso suas entidades tenham mais propriedades, adapte conforme necessário.
     */
    static fromEntity(entity: { id: string, codigo: string, titulo: string }): FamiliaResponseDto {
        return new FamiliaResponseDto(
            entity.id,
            entity.codigo,
            entity.titulo,
        )
    }
}
