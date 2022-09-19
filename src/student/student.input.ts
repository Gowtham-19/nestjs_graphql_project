/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
    @MinLength(3)
    @Field()
    first_name: string;
    @Field()
    last_name:string;
}