import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './restaurant-create.dto';

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto,
) {}

@ArgsType()
export class UpdateRestaurantDto {
  @Field((type) => Number)
  id: Number;

  @Field((type) => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
