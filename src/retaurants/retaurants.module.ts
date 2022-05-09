import { Module } from '@nestjs/common';
import { RestaurantsResolve } from './retaurants.resolve';

@Module({
  providers: [RestaurantsResolve],
})
export class RestaurantsModule {}
