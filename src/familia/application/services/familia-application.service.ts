import {Injectable} from '@nestjs/common'
import {CommandBus,QueryBus} from '@nestjs/cqrs'
import {CreateFamiliaCommand} from '@src/familia/application/usecases/commands/create-familia.command'
import {GetFamiliaByIdQuery} from '@src/familia/application/usecases/queries/get-familia-by-id.query'
import {FamiliaResponseDto} from '../dtos/familia-response.dto'
import {DeleteFamiliaCommand} from '../usecases/commands/delete-familia.command'
import {UpdateFamiliaCommand} from '../usecases/commands/update-familia.command'
import {ListFamiliasQuery} from '../usecases/queries/list-familias.query'

@Injectable()
export class FamiliaApplicationService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async createFamilia({codigo,titulo}:{codigo: string,titulo: string}): Promise<FamiliaResponseDto> {
        // Cria o command
        const command=new CreateFamiliaCommand(codigo,titulo)
        // Dispara no CommandBus, que encontra e roda o handler
        const familia=await this.commandBus.execute(command)
        // Converte p/ DTO se quiser
        return FamiliaResponseDto.fromEntity(familia)
    }

    async getFamiliaById(id: string): Promise<FamiliaResponseDto|null> {
        const query=new GetFamiliaByIdQuery(id)
        const familia=await this.queryBus.execute(query)
        if(!familia) return null
        return FamiliaResponseDto.fromEntity(familia)
    }

    async listFamilias(): Promise<FamiliaResponseDto[]> {
        const query=new ListFamiliasQuery()
        const familias=await this.queryBus.execute(query)
        return familias.map(FamiliaResponseDto.fromEntity)
    }

    async updateFamilia({id,codigo,titulo}:{id?: string,codigo?: string,titulo?: string}): Promise<FamiliaResponseDto|null> {
        // Cria o command
        const command=new UpdateFamiliaCommand({id,codigo,titulo})
        // Dispara no CommandBus, que encontra e roda o handler
        const familia=await this.commandBus.execute(command)
        if(!familia) return null
        // Converte p/ DTO se quiser
        return FamiliaResponseDto.fromEntity(familia)
    }

    async deleteFamilia(id: string): Promise<boolean> {
        // Cria o command
        const command=new DeleteFamiliaCommand(id)
        // Dispara no CommandBus, que encontra e roda o handler
        return this.commandBus.execute(command)
    }
}
