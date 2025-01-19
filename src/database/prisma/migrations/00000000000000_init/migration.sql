-- CreateTable
CREATE TABLE "Familia" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "Familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ocupacao" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "Ocupacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sinonimo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "Sinonimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "SubGrupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupoPrincipal" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "SubGrupoPrincipal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrandeGrupo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,

    CONSTRAINT "GrandeGrupo_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "Familia_codigo_key" ON "Familia"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Ocupacao_codigo_key" ON "Ocupacao"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Sinonimo_codigo_key" ON "Sinonimo"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "SubGrupo_codigo_key" ON "SubGrupo"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "SubGrupoPrincipal_codigo_key" ON "SubGrupoPrincipal"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "GrandeGrupo_codigo_key" ON "GrandeGrupo"("codigo");
