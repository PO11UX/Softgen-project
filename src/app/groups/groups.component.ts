import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { groups } from '../shared/models/group.medel';
import { students } from '../shared/models/student.model';
import { teachers } from '../shared/models/teacher.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  groups: groups[] = [];
  teachers: teachers[] = [];
  students: students[] = []; 
  teacherIds: number[] = [];
  studentIds: number[] = [];
  keyword!: string;
  groupId!: number;
  constructor(private _mainService: MainService,private route : Router) { }

  ngOnInit(): void {
    this.getAllGroups();
    this.getAllTeachers();
    this.getAllStudents();
  }
  getAllGroups(){
    this._mainService.GetGroups().subscribe((result) => {
      this.groups = result;
      
    })
  }
  getAllTeachers(){
    this._mainService.GetTeachers().subscribe((result) => {
      this.teachers = result;
      
    })
  }

  
  getAllStudents(){
    this._mainService.GetStudents().subscribe((result) => {
      this.students = result;
      
    })
  }

  addTeachersToGroup(){
    this.groups[this.groupId].teachers = this.teachers.filter(element => this.teacherIds.includes(element.id))

    this._mainService.addTeachersToGroup(this.groups[this.groupId], this.groups[this.groupId].id).subscribe((result) => {
      this.getAllGroups();
    })
  }
  removeTeacher(teacherId: number, groupID: number){
    this.groups[groupID].teachers = this.groups[groupID].teachers.filter((el) => el.id !== teacherId)
    this._mainService.addTeachersToGroup(this.groups[groupID], this.groups[groupID].id).subscribe((result) => {
      this.getAllGroups();
    })
  }
  addStudentsToGroup(){
    this.groups[this.groupId].students = this.students.filter(element => this.studentIds.includes(element.id))
    this._mainService.addStudentsToGroup(this.groups[this.groupId], this.groups[this.groupId].id).subscribe((result) => {
      this.getAllGroups();
    })
  }
  removeStudent(StudentId: number, groupID: number){
    this.groups[groupID].students = this.groups[groupID].students.filter((el) => el.id !== StudentId)
    this._mainService.addStudentsToGroup(this.groups[groupID], this.groups[groupID].id).subscribe((result) => {
      this.getAllGroups();
    })
  }



  saveGroupId(id: number){
    this.groupId = id
  }
  filter(keyword: string){
    this.groups = this.groups.filter(item => item.name.includes(keyword) || item.id.toString().includes(keyword) )
    if(!keyword){
      this.getAllGroups();
    }
  }


  deleteGroup(id: number){
    this._mainService.DeteleGroup(id).subscribe((result) => {
      this.getAllGroups()
    })
  }

  editGroup(id: number){
    this.route.navigate(['edit-group'], { queryParams: { groupId: id } });
  }
  createGroup(){
    this.route.navigate(['create-group'])
  }

  back(){
    this.route.navigate(['menu'])
  }
}
