/* eslint-disable prettier/prettier */

import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { CreateStudentInput } from "./student.input";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(
        private studentService: StudentService
    ){}

@Query(returns => StudentType)
getStudent(
    @Args('id') id:string){
    return this.studentService.getStudent(id);
}

@Query(returns => [StudentType])
getStudents(){
    return this.studentService.getStudents();
}

@Mutation(returns => StudentType)
createStudent( 
    @Args('createStudentInput') createStudentInput: CreateStudentInput
){
    return this.studentService.createStudent(createStudentInput);
}

}
