/* eslint-disable prettier/prettier */
import { Field, InputType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;
  @IsUUID("4",{each:true})
  @Field((type) => [ID])
  studentIds: string[];
}