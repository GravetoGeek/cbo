-- CreateTable
CREATE TABLE "Familia" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "Familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ocupacao" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "Ocupacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerfilOcupacional" (
    "id" TEXT NOT NULL,
    "cod_grande_grupo" TEXT NOT NULL,
    "cod_subgrupo_principal" TEXT NOT NULL,
    "cod_subgrupo" TEXT NOT NULL,
    "cod_familia" TEXT NOT NULL,
    "cod_ocupacao" TEXT NOT NULL,
    "sgl_grande_area" TEXT NOT NULL,
    "nome_grande_area" TEXT NOT NULL,
    "cod_atividade" TEXT NOT NULL,
    "nome_atividade" TEXT NOT NULL,

    CONSTRAINT "PerfilOcupacional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sinonimo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "Sinonimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "SubGrupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupoPrincipal" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "SubGrupoPrincipal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrandeGrupo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT,

    CONSTRAINT "GrandeGrupo_pkey" PRIMARY KEY ("id")
);
