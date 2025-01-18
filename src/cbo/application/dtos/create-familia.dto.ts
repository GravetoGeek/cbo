import {IsNotEmpty,IsString} from 'class-validator'

export class CreateFamiliaDto {
    @IsString()
    @IsNotEmpty({message: 'O campo "codigo" é obrigatório.'})
        codigo: string

    @IsString()
    @IsNotEmpty({message: 'O campo "titulo" é obrigatório.'})
        titulo: string
}