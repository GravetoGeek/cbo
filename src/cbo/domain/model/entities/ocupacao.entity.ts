import {Familia} from './familia.entity'
import {PerfilOcupacional} from './perfil-ocupacional.entity'
import {Sinonimo} from './sinonimo.entity'

export class Ocupacao {
    id?: string
    codigo: string
    titulo: string
    familiaId?: string
    familia?: Familia
    sinonimos?: Sinonimo[] // Opcional
    perfilOcupacional?: PerfilOcupacional[] // Opcional
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }
}
