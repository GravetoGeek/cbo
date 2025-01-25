export class Familia {
    id?: string
    codigo: string
    titulo: string
    constructor({codigo,titulo,id}:{codigo: string, titulo: string, id?: string}) {
        this.codigo = codigo
        this.titulo = titulo
        this.id = id
    }

    public toString(): string {
        return `ID: ${this.id}, Família: ${this.titulo}, Código: ${this.codigo}`
    }
}