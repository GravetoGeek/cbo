import {Familia} from './familia.entity'
import {GrandeGrupo} from './grande-grupo.entity'
import {Ocupacao} from './ocupacao.entity'
import {SubGrupoPrincipal} from './sub-grupo-principal.entity'
import {SubGrupo} from './sub-grupo.entity'

export class PerfilOcupacional {
    id?: string
    cod_grande_grupo: string // Código do grande grupo
    cod_subgrupo_principal: string // Código do subgrupo principal
    cod_subgrupo: string // Código do subgrupo
    cod_familia: string // Código da família
    cod_ocupacao: string // Código da ocupação
    sgl_grande_area: string
    nome_grande_area: string
    cod_atividade: string
    nome_atividade: string

    grandeGrupoId?: string
    grandeGrupo?: GrandeGrupo
    subGrupoPrincipalId?: string
    subGrupoPrincipal?: SubGrupoPrincipal
    subGrupoId?: string
    subGrupo?: SubGrupo
    familiaId?: string
    familia?: Familia
    ocupacaoId?: string
    ocupacao?: Ocupacao

    constructor({
        cod_grande_grupo,
        cod_subgrupo_principal,
        cod_subgrupo,
        cod_familia,
        cod_ocupacao,
        sgl_grande_area,
        nome_grande_area,
        cod_atividade,
        nome_atividade,
    }: {
    cod_grande_grupo: string;
    cod_subgrupo_principal: string;
    cod_subgrupo: string;
    cod_familia: string;
    cod_ocupacao: string;
    sgl_grande_area: string;
    nome_grande_area: string;
    cod_atividade: string;
    nome_atividade: string;
  }) {
        this.cod_grande_grupo = cod_grande_grupo
        this.cod_subgrupo_principal = cod_subgrupo_principal
        this.cod_subgrupo = cod_subgrupo
        this.cod_familia = cod_familia
        this.cod_ocupacao = cod_ocupacao
        this.sgl_grande_area = sgl_grande_area
        this.nome_grande_area = nome_grande_area
        this.cod_atividade = cod_atividade
        this.nome_atividade = nome_atividade

        // Atributos relacionais podem ser inicializados com null ou objetos padrões.
        this.grandeGrupoId = cod_grande_grupo // Pode ser atualizado ao associar o `GrandeGrupo`
        this.subGrupoPrincipalId = cod_subgrupo_principal // Relacionamento similar
        this.subGrupoId = cod_subgrupo // Relacionamento similar
        this.familiaId = cod_familia // Relacionamento similar
        this.ocupacaoId = cod_ocupacao // Relacionamento similar
    }
}
