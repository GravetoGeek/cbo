import {Ocupacao} from './ocupacao.entity'
import {PerfilOcupacional} from './perfil-ocupacional.entity'
import {SubGrupo} from './sub-grupo.entity'

export class Familia {
    id?: string
    codigo: string
    titulo: string
    subGrupoId?: string
    subGrupo?: SubGrupo
    ocupacoes?: Ocupacao[] // Opcional, pois pode não haver ocupações associadas inicialmente
    perfilOcupacional?: PerfilOcupacional[] // Opcional
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }

    public toString(): string {
        return `ID: ${this.id}, Família: ${this.titulo}, Código: ${this.codigo}`
    }
}