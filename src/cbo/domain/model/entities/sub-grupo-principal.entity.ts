import {GrandeGrupo} from './grande-grupo.entity'
import {PerfilOcupacional} from './perfil-ocupacional.entity'
import {SubGrupo} from './sub-grupo.entity'

export class SubGrupoPrincipal {
    id: string
    codigo: string
    titulo: string
    grandeGrupoId?: string
    grandeGrupo?: GrandeGrupo
    subGrupos?: SubGrupo[] // Opcional
    perfilOcupacional?: PerfilOcupacional[] // Opcional
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }
}
