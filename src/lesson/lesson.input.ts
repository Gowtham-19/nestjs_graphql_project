/* eslint-disable prettier/prettier */
import { InputType, Field,ID } from '@nestjs/graphql';
import {MinLength, IsDateString} from 'class-validator'

@InputType()
export class CreateLessonInput {
  @MinLength(3)
  @Field()
  name: string;
  @IsDateString()
  @Field()
  startDate:string;
  @IsDateString()
  @Field()
  endDate:string;

  @Field(() => [ID],{defaultValue: []})
  students: string [];
}
