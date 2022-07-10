import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { groups } from './shared/models/group.medel';
import { teachers } from './shared/models/teacher.model';
import { students } from './shared/models/student.model';
@Injectable({
  providedIn: 'root',
})
export class MainService {

    constructor(private  api: HttpClient) {
    }
  
  // groupService
  CreateGroup(body: groups){
    return this.api.post<groups[]>("http://localhost:3000/groups", body );
  }
  GetGroups() {
    return this.api.get<groups[]>("http://localhost:3000/groups");
    
  }
  DeteleGroup(id: number){
    return this.api.delete<groups[]>(`http://localhost:3000/groups/${id}`)
  }
  GetGroupDetails(id: number){
    return this.api.get<groups>(`http://localhost:3000/groups/${id}`)
  }
  EditGroup(body : groups){
    return this.api.put<groups[]>(`http://localhost:3000/groups/${body.id}`, body)
  }
  //teacherService
  CreateTeacher(body: teachers){
    return this.api.post<teachers[]>("http://localhost:3000/teachers", body );
  }
  GetTeachers() {
    return this.api.get<teachers[]>("http://localhost:3000/teachers");
    
  }
  DeteleTeacher(id: number){
    return this.api.delete<teachers[]>(`http://localhost:3000/teachers/${id}`)
  }
  GetTeacherDetails(id: number){
    return this.api.get<teachers>(`http://localhost:3000/teachers/${id}`)
  }
  EditTeacher(body : teachers){
    return this.api.put<teachers[]>(`http://localhost:3000/teachers/${body.id}`, body)
  }
  //studentService
  CreateStudent(body: students){
    return this.api.post<students[]>("http://localhost:3000/students", body );
  }
  GetStudents() {
    return this.api.get<students[]>("http://localhost:3000/students");
    
  }
  DeteleStudent(id: number){
    return this.api.delete<students[]>(`http://localhost:3000/students/${id}`)
  }
  GetStudentDetails(id: number){
    return this.api.get<students>(`http://localhost:3000/students/${id}`)
  }
  EditStudent(body : students){
    return this.api.put<students[]>(`http://localhost:3000/students/${body.id}`, body)
  }
 
}
