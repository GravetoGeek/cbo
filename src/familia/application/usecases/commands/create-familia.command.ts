// familia/application/usecases/commands/create-familia.command.ts

/**
 * Command que carrega os dados necessários para criar uma Família.
 * Poderia ser semelhante a CreateFamiliaDto, mas geralmente focamos no "caso de uso".
 */
export class CreateFamiliaCommand {
    constructor(
        public readonly codigo: string,
        public readonly titulo: string,
    ) {}
}
