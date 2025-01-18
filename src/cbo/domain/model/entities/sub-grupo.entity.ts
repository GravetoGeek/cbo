import {Familia} from './familia.entity'
import {PerfilOcupacional} from './perfil-ocupacional.entity'
import {SubGrupoPrincipal} from './sub-grupo-principal.entity'

export class SubGrupo {
    id?: string
    codigo: string
    titulo: string
    subGrupoPrincipalId?: string
    subGrupoPrincipal?: SubGrupoPrincipal
    familias?: Familia[] // Opcional
    perfilOcupacional?: PerfilOcupacional[] // Opcional
    constructor( codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }
}
