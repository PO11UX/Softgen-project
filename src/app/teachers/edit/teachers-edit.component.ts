import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { teachers } from 'src/app/shared/models/teacher.model';

@Component({
  selector: 'app-teachers-edit',
  templateUrl: './teachers-edit.component.html',
  styleUrls: ['.././teachers.component.css']
})
export class TeachersEditComponent implements OnInit {


  teacher: teachers =  new teachers('','','',0,'');
  
  teacherId = parseInt(this.activeRoute.snapshot.queryParams['teacherId'])
  @ViewChild('teacherForm')
  teacherForm!: NgForm; 
  constructor(private _mainService: MainService, private  route : Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._mainService.GetTeacherDetails(this.teacherId).subscribe((result) => {
      this.teacher = result;
      console.log(result);
      
    })
  }



  editTeacher(){
    this._mainService.EditTeacher(this.teacher).subscribe((result) => {
      console.log(result);
      this.route.navigate(['teachers'])
    })
  }
}
