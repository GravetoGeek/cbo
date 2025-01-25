// update-familia.command.ts

/**
 * Command que representa a operação de atualizar uma Família pelo ID,
 * podendo alterar o 'codigo' e/ou 'titulo'.
 */
export class UpdateFamiliaCommand {
    public id: string
    public codigo?: string
    public titulo?: string

    constructor({id,codigo,titulo}:{id: string,codigo?: string,titulo?: string}) {
        this.id=id
        this.codigo=codigo
        this.titulo=titulo
    }
}
