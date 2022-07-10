import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { teachers } from 'src/app/shared/models/teacher.model';

@Component({
  selector: 'app-teachers-create',
  templateUrl: './teachers-create.component.html',
  styleUrls: ['.././teachers.component.css']
})
export class TeachersCreateComponent implements OnInit {


  teacher: teachers =  new teachers('','','',0,'');
  @ViewChild('teacherForm')
  teacherForm!: NgForm; 
  constructor(private _mainService: MainService, private  route : Router) {}

  ngOnInit(): void {
  }



  createTeacher(){
    this._mainService.CreateTeacher(this.teacher).subscribe((result) => {
      console.log(result);
      this.route.navigate(['teachers'])
    })
  }
  back(){
    this.route.navigate(['teachers'])
  }
}
