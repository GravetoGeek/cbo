import {IsNotEmpty,IsString} from 'class-validator'

export class CreateFamiliaDto {
    @IsString({message: 'O campo "codigo" deve ser uma string.'})
    @IsNotEmpty({message: 'O campo "codigo" é obrigatório.'})
        codigo: string

    @IsString({message: 'O campo "titulo" deve ser uma string.'})
    @IsNotEmpty({message: 'O campo "titulo" é obrigatório.'})
        titulo: string
}