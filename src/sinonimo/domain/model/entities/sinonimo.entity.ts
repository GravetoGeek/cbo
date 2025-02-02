export class Sinonimo {
    id?: string
    codigo: string
    titulo: string
    constructor({ codigo, titulo, id }: { codigo: string; titulo: string; id?: string }) {
        this.codigo = codigo
        this.titulo = titulo
        this.id = id
    }
}
