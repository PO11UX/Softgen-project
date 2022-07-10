import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { groups } from '../../shared/models/group.medel';

@Component({
  selector: 'app-groups-create',
  templateUrl: './groups-create.component.html',
  styleUrls: ['.././groups.component.css']
})
export class GroupsCreateComponent implements OnInit {


  group: groups =  new groups('', '',[],[]);
  constructor(private _mainService: MainService, private  route : Router) {}

  ngOnInit(): void {
  }



  createGroup(){
    this._mainService.CreateGroup(this.group).subscribe((result) => {
      console.log(result);
      this.route.navigate(['groups'])
    })
  }
  back(){
    this.route.navigate(['groups'])
  }
}
