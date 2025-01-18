import {PerfilOcupacional} from './perfil-ocupacional.entity'
import {SubGrupoPrincipal} from './sub-grupo-principal.entity'

export class GrandeGrupo {
    id?: string
    codigo: string
    titulo: string
    subgruposPrincipais?: SubGrupoPrincipal[] // Opcional
    perfilOcupacional?: PerfilOcupacional[] // Opcional
    constructor(codigo: string, titulo: string) {
        this.codigo = codigo
        this.titulo = titulo
    }
}
