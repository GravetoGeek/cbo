import {Args,Query,Resolver} from '@nestjs/graphql'

@Resolver()
export class PrismaResolver {
    @Query(() => { return String })
    async helloWorld(@Args('name') name: string): Promise<string>{
        return `Hello, ${name}!`
    }
}