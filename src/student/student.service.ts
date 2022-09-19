import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Student } from './student.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateStudentInput } from './student.input';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { first_name, last_name } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuidv4(),
      first_name,
      last_name,
    });

    this.studentRepository.save(student);

    return student;
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: In([studentIds]),
      },
    });
  }
}
