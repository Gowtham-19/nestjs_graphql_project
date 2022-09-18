/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
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
}
