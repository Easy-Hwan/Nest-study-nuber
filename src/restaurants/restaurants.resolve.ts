import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TryCatch } from 'src/try-catch.decorator';
import { CreateRestaurantDto } from './dtos/restaurant-create.dto';
import { UpdateRestaurantDto } from './dtos/restaurant-update.dto';
import { Restaurant } from './entities/restaurants.entity';
import { RestaurantsService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantsResolve {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Query((returns) => [Restaurant])
  getAllRestaurant(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<Boolean | Restaurant> {
    try {
      await this.restaurantService.create(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @TryCatch('update falid')
  @Mutation((returns) => Boolean)
  async updateRestaurant(
    @Args() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Boolean> {
    try {
      const updateCount = await this.restaurantService.update(
        updateRestaurantDto,
      );
      return updateCount['affected'] ? true : false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
