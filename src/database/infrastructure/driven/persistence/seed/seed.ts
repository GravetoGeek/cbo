import {PrismaClient} from '@prisma/client'
import familias from '../../../../../familia/infrastructure/driven/persistence/seed/familia'
import grandegrupos from '../../../../../grande-grupo/infrastructure/driven/persistence/seed/grande-grupo'
import ocupacoes from '../../../../../ocupacao/infrastructure/driven/persistence/seed/ocupacao'
import perfisOcupacionais from '../../../../../perfil-ocupacional/infrastructure/driven/persistence/seed/perfil-ocupacional'
import sinonimos from '../../../../../sinonimo/infrastructure/driven/persistence/seed/sinonimo'
import subGruposPrincipais from '../../../../../sub-grupo-principal/infrastructure/driven/persistence/seed/sub-grupo-principal'
import subGrupos from '../../../../../sub-grupo/infrastructure/driven/persistence/seed/sub-grupo'


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

    await prisma.sinonimo.createMany({
        data: sinonimos.map(sinonimo => {return {...sinonimo}})
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