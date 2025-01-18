import {Ocupacao} from './ocupacao.entity'

export class Sinonimo {
    id?: string
    codigo: string
    titulo: string
    ocupacaoId?: string
    ocupacao?: Ocupacao
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }
}
