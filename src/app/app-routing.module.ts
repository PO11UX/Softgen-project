import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GroupsCreateComponent } from './groups/create/groups-create.component';
import { GroupsEditComponent } from './groups/edit/groups-edit.component';
import { GroupsComponent } from './groups/groups.component';
import { MenuComponent } from './menu/menu.component';
import { StudentsCreateComponent } from './students/create/students-create.component';
import { studentsEditComponent } from './students/edit/students-edit.component';
import { StudentsComponent } from './students/students.component';
import { TeachersCreateComponent } from './teachers/create/teachers-create.component';
import { TeachersEditComponent } from './teachers/edit/teachers-edit.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'create-group', component: GroupsCreateComponent },
    { path: 'edit-group', component: GroupsEditComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'create-teacher', component: TeachersCreateComponent },
    { path: 'edit-teacher', component: TeachersEditComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'create-student', component: StudentsCreateComponent },
    { path: 'edit-student', component: studentsEditComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  