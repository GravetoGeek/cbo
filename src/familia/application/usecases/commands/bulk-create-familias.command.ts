// bulk-create-familias.command.ts

/**
 * Command que representa a operação de criar várias Famílias em lote.
 * Vamos supor que cada item tenha 'codigo' e 'titulo' para criar.
 */
export class BulkCreateFamiliasCommand {
    constructor(
        public readonly familias: {
            codigo: string
            titulo: string
        }[],
    ) {}
}
