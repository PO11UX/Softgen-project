import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { groups } from '../../shared/models/group.medel';

@Component({
  selector: 'app-groups-edit',
  templateUrl: './groups-edit.component.html',
  styleUrls: ['.././groups.component.css']
})
export class GroupsEditComponent implements OnInit {


  group: groups =  new groups('', '',[],[]);
  
  groupId = parseInt(this.activeRoute.snapshot.queryParams['groupId'])
  constructor(private _mainService: MainService,private activeRoute: ActivatedRoute, private  route : Router) {}

  ngOnInit(): void {
    this._mainService.GetGroupDetails(this.groupId).subscribe((result) => {
      this.group = result;
      console.log(result);
      
    })
  }



  EditGroup(){
    this._mainService.EditGroup(this.group).subscribe((result) => {
      console.log(result);
      this.route.navigate(['groups'])
    })
  }
}
