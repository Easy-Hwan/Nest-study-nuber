import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: Number;

  @Column()
  @Field((type) => String)
  name: String;

  @Column()
  @Field((type) => Boolean)
  isVegan: Boolean;

  @Column()
  @Field((type) => String)
  address: String;

  @Column()
  @Field((type) => String)
  ownersName: String;

  @Field((type) => String)
  @Column()
  categoryName: String;
}
