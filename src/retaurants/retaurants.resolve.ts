import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/retaurant.create.dto';
import { Restaurant } from './entities/retaurants.entity';

@Resolver((of) => Restaurant)
export class RestaurantsResolve {
  @Query((returns) => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: Boolean): Restaurant[] {
    return [];
  }

  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): Boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
