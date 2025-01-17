-- CreateTable
CREATE TABLE "Familia" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "subGrupoId" TEXT NOT NULL,

    CONSTRAINT "Familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ocupacao" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,

    CONSTRAINT "Ocupacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sinonimo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ocupacaoId" TEXT NOT NULL,

    CONSTRAINT "Sinonimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupo" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "subGrupoPrincipalId" TEXT NOT NULL,

    CONSTRAINT "SubGrupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubGrupoPrincipal" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "grandeGrupoId" TEXT NOT NULL,

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
    "grandeGrupoId" TEXT NOT NULL,
    "subGrupoPrincipalId" TEXT NOT NULL,
    "subGrupoId" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,
    "ocupacaoId" TEXT NOT NULL,
    "sgl_grande_area" TEXT NOT NULL,
    "nome_grande_area" TEXT NOT NULL,
    "cod_atividade" TEXT NOT NULL,
    "nome_atividade" TEXT NOT NULL,

    CONSTRAINT "PerfilOcupacional_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Familia_codigo_key" ON "Familia"("codigo");

-- CreateIndex
CREATE INDEX "Familia_codigo_idx" ON "Familia"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Ocupacao_codigo_key" ON "Ocupacao"("codigo");

-- CreateIndex
CREATE INDEX "Ocupacao_codigo_idx" ON "Ocupacao"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Sinonimo_codigo_key" ON "Sinonimo"("codigo");

-- CreateIndex
CREATE INDEX "Sinonimo_codigo_idx" ON "Sinonimo"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "SubGrupo_codigo_key" ON "SubGrupo"("codigo");

-- CreateIndex
CREATE INDEX "SubGrupo_codigo_idx" ON "SubGrupo"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "SubGrupoPrincipal_codigo_key" ON "SubGrupoPrincipal"("codigo");

-- CreateIndex
CREATE INDEX "SubGrupoPrincipal_codigo_idx" ON "SubGrupoPrincipal"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "GrandeGrupo_codigo_key" ON "GrandeGrupo"("codigo");

-- CreateIndex
CREATE INDEX "GrandeGrupo_codigo_idx" ON "GrandeGrupo"("codigo");

-- AddForeignKey
ALTER TABLE "Familia" ADD CONSTRAINT "Familia_subGrupoId_fkey" FOREIGN KEY ("subGrupoId") REFERENCES "SubGrupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ocupacao" ADD CONSTRAINT "Ocupacao_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "Familia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sinonimo" ADD CONSTRAINT "Sinonimo_ocupacaoId_fkey" FOREIGN KEY ("ocupacaoId") REFERENCES "Ocupacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGrupo" ADD CONSTRAINT "SubGrupo_subGrupoPrincipalId_fkey" FOREIGN KEY ("subGrupoPrincipalId") REFERENCES "SubGrupoPrincipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubGrupoPrincipal" ADD CONSTRAINT "SubGrupoPrincipal_grandeGrupoId_fkey" FOREIGN KEY ("grandeGrupoId") REFERENCES "GrandeGrupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilOcupacional" ADD CONSTRAINT "PerfilOcupacional_grandeGrupoId_fkey" FOREIGN KEY ("grandeGrupoId") REFERENCES "GrandeGrupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilOcupacional" ADD CONSTRAINT "PerfilOcupacional_subGrupoPrincipalId_fkey" FOREIGN KEY ("subGrupoPrincipalId") REFERENCES "SubGrupoPrincipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilOcupacional" ADD CONSTRAINT "PerfilOcupacional_subGrupoId_fkey" FOREIGN KEY ("subGrupoId") REFERENCES "SubGrupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilOcupacional" ADD CONSTRAINT "PerfilOcupacional_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "Familia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfilOcupacional" ADD CONSTRAINT "PerfilOcupacional_ocupacaoId_fkey" FOREIGN KEY ("ocupacaoId") REFERENCES "Ocupacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
