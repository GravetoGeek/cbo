import { PrismaClient } from '@prisma/client'
import familias from './familia'
import grandegrupos from './grandegrupo'
import ocupacoes from './ocupacao'
import perfisOcupacionais from './perfilOcupacional'
import subGrupos from './subgrupo'
import subGruposPrincipais from './subgrupoPrincipal'


async function seed(prisma: PrismaClient) {
    await prisma.familia.createMany({
        data: familias.map(familia => {return {...familia}})
    })

    await prisma.ocupacao.createMany({
        data: ocupacoes.map(ocupacao => {return {...ocupacao}})
    })

    await prisma.subGrupo.createMany({
        data: subGrupos.map(subGrupo => {return {...subGrupo}})
    })

    await prisma.subGrupoPrincipal.createMany({
        data: subGruposPrincipais.map(subGrupoPrincipal => {return {...subGrupoPrincipal}})
    })

    await prisma.grandeGrupo.createMany({
        data: grandegrupos.map(grandegrupo => {return {...grandegrupo}})
    })

    await prisma.perfilOcupacional.createMany({
        data: perfisOcupacionais.map(perfilocupacional => {return {...perfilocupacional}})
    })
}



export default seed