import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { students } from '../shared/models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: students[] = [];
  keyword!: string;
  constructor(private _mainService: MainService, private  route : Router) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this._mainService.GetStudents().subscribe((result) => {
      this.students = result;
      
    })
  }

  deleteGroup(id: number){
    this._mainService.DeteleStudent(id).subscribe((result) => {
      this.getAllStudent()
    })
  }


  filter(keyword: string){
    this.students = this.students.filter(item => item.name.includes(keyword) || item.surname.includes(keyword) || item.mail.includes(keyword) || item.id.toString().includes(keyword)|| item.birthday.toString().includes(keyword) )
    if(!keyword){
      this.getAllStudent();
    }
  }

  editGroup(id: number){
    this.route.navigate(['edit-student'], { queryParams: { studentId: id } });
  }
  createTeacher(){
    this.route.navigate(['create-student'])
  }
  back(){
    this.route.navigate(['menu'])
  }

}
