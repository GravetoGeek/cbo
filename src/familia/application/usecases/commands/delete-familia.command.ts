// delete-familia.command.ts

/**
 * Command que representa a operação de deletar uma Família pelo ID.
 */
export class DeleteFamiliaCommand {
    constructor(public readonly id: string) {}
}
