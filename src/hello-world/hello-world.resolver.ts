import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Esto es un query', name: 'Hola' })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomToZero',
    description: 'From zero to argument TO (default 10)',
  })
  getRandomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 10,
  ): number {
    return Math.floor(Math.random() * to + 1);
  }
}
