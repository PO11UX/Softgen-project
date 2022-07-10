import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { students } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['.././students.component.css']
})
export class studentsEditComponent implements OnInit {


  student: students =  new students('','','',0,'');
  
  studentId = parseInt(this.activeRoute.snapshot.queryParams['studentId'])
  @ViewChild('studentForm')
  studentForm!: NgForm; 
  constructor(private _mainService: MainService, private  route : Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._mainService.GetStudentDetails(this.studentId).subscribe((result) => {
      this.student = result;
      console.log(result);
      
    })
  }



  editStudents(){
    this._mainService.EditStudent(this.student).subscribe((result) => {
      console.log(result);
      this.route.navigate(['students'])
    })
  }
  back(){
    this.route.navigate(['students'])
  }
}
