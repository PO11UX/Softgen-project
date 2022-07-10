import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { groups } from '../shared/models/group.medel';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  groups: groups[] = []; 
  keyword!: string;
  constructor(private _mainService: MainService,private route : Router) { }

  ngOnInit(): void {
    this.getAllGroups();
  }
  getAllGroups(){
    this._mainService.GetGroups().subscribe((result) => {
      this.groups = result;
      
    })
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
