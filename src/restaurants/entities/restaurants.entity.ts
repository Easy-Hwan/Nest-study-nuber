import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: Number;

  @Column()
  @Field((type) => String)
  @IsString()
  @Length(5)
  name: String;

  @Column({ default: false })
  @Field((type) => Boolean, { defaultValue: false })
  @IsOptional()
  @IsBoolean()
  isVegan: Boolean;

  @Column()
  @Field((type) => String)
  @IsString()
  address: String;

  @Column()
  @Field((type) => String)
  @IsString()
  ownersName: String;

  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: String;
}
