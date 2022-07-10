import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { teachers } from '../shared/models/teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: teachers[] = [];
  keyword!: string;
  constructor(private _mainService: MainService, private  route : Router) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(){
    this._mainService.GetTeachers().subscribe((result) => {
      this.teachers = result;
      
    })
  }

  deleteGroup(id: number){
    this._mainService.DeteleTeacher(id).subscribe((result) => {
      this.getAllTeachers()
    })
  }


  filter(keyword: string){
    this.teachers = this.teachers.filter(item => item.name.includes(keyword) || item.surname.includes(keyword) || item.mail.includes(keyword) || item.id.toString().includes(keyword)|| item.birthday.toString().includes(keyword))
    if(!keyword){
      this.getAllTeachers();
    }
  }

  editGroup(id: number){
    this.route.navigate(['edit-teacher'], { queryParams: { teacherId: id } });
  }
  createTeacher(){
    this.route.navigate(['create-teacher'])
  }
  back(){
    this.route.navigate(['menu'])
  }
}
