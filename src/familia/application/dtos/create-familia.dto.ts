import {Field,ID,InputType} from '@nestjs/graphql'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'

@InputType()
export class CreateFamiliaDto {
    @IsString({message: 'O campo "id" deve ser uma string.'})
    @IsOptional({message: 'O campo "id" é opcional.'})
    @IsNotEmpty({message: 'O campo "id" não pode estar vazio.'})
    @Field(() => {return ID})
        id?: string
    @IsString({message: 'O campo "codigo" deve ser uma string.'})
    @IsNotEmpty({message: 'O campo "codigo" é obrigatório.'})
    @Field()
        codigo: string

    @IsString({message: 'O campo "titulo" deve ser uma string.'})
    @IsNotEmpty({message: 'O campo "titulo" é obrigatório.'})
    @Field()
        titulo: string
}