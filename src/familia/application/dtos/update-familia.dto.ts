import {Field,ID,InputType} from '@nestjs/graphql'
import {IsNotEmpty,IsOptional,IsString} from 'class-validator'

@InputType()
export class UpdateFamiliaDto {
    @IsString({ message: 'O campo "id" deve ser uma string.' })
    @IsNotEmpty({ message: 'O campo "id" é obrigatório.' })
    @Field(() => {return ID})
        id?: string
    @IsString({ message: 'O campo "id" deve ser uma string.' })
    @IsNotEmpty({ message: 'O campo "codigo" é obrigatório.' })
    @IsOptional({ message: 'O campo "codigo" é opcional.' })
    @Field()
        codigo?: string

    @IsString({ message: 'O campo "titulo" deve ser uma string.' })
    @IsNotEmpty({ message: 'O campo "titulo" é obrigatório.' })
    @IsOptional({ message: 'O campo "titulo" é opcional.' })
    @Field()
        titulo?: string
}
