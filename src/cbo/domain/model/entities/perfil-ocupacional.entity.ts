export class PerfilOcupacional {
    id: string
    cod_grande_grupo: string
    cod_subgrupo_principal: string
    cod_subgrupo: string
    cod_familia: string
    cod_ocupacao: string
    sgl_grande_area: string
    nome_grande_area: string
    cod_atividade: string
    nome_atividade: string
    constructor(
        id: string,
        cod_grande_grupo: string,
        cod_subgrupo_principal: string,
        cod_subgrupo: string,
        cod_familia: string,
        cod_ocupacao: string,
        sgl_grande_area: string,
        nome_grande_area: string,
        cod_atividade: string,
        nome_atividade: string
    ) {
        this.id = id
        this.cod_grande_grupo = cod_grande_grupo
        this.cod_subgrupo_principal = cod_subgrupo_principal
        this.cod_subgrupo = cod_subgrupo
        this.cod_familia = cod_familia
        this.cod_ocupacao = cod_ocupacao
        this.sgl_grande_area = sgl_grande_area
        this.nome_grande_area = nome_grande_area
        this.cod_atividade = cod_atividade
        this.nome_atividade = nome_atividade
    }
}