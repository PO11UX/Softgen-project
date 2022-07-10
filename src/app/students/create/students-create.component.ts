import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { students } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['.././students.component.css']
})
export class StudentsCreateComponent implements OnInit {


  student: students =  new students('','','',0,'');
  @ViewChild('studentForm')
  studentForm!: NgForm; 
  constructor(private _mainService: MainService, private  route : Router) {}

  ngOnInit(): void {
  }



  createStudent(){
    this._mainService.CreateStudent(this.student).subscribe((result) => {
      console.log(result);
      this.route.navigate(['students'])
    })
  }
  back(){
    this.route.navigate(['students'])
  }
}
