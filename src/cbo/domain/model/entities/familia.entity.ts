export class Familia {
    id?: string
    codigo: string
    titulo: string
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }

    public toString(): string {
        return `ID: ${this.id}, Família: ${this.titulo}, Código: ${this.codigo}`
    }
}