import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field((types) => String)
  @IsString()
  @Length(5, 10)
  name: String;

  @Field((types) => Boolean)
  @IsBoolean()
  isVegan: Boolean;

  @Field((types) => String)
  @IsString()
  address: String;

  @Field((types) => String)
  @IsString()
  ownersName: String;
}
