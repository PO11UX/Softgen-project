import { students } from "./student.model";
import { teachers } from "./teacher.model";

export class groups{
    name: string;
    id: any;
    students: students[];
    teachers: teachers[];

   

    constructor(name: string,id: any, students: students[], teachers: teachers[]){
        this.name = name;
        this.id=id;    
        this.students = students;
        this.teachers = teachers;
    }
}