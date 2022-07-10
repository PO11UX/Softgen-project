import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  ShowGroups(){
    this.route.navigate(['groups'])
  }
  ShowTeachers(){
    this.route.navigate(['teachers'])
  }
  ShowStudents(){
    this.route.navigate(['students'])
  }
}
