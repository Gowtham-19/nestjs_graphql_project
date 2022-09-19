/* eslint-disable prettier/prettier */
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;
  
    @PrimaryColumn('uuid')
    id: string;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
}