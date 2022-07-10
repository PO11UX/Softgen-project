import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupsCreateComponent } from './groups/create/groups-create.component';
import { GroupsComponent } from './groups/groups.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { MenuComponent } from './menu/menu.component';
import { GroupsEditComponent } from './groups/edit/groups-edit.component';
import { TeachersCreateComponent } from './teachers/create/teachers-create.component';
import { TeachersEditComponent } from './teachers/edit/teachers-edit.component';
import { StudentsCreateComponent } from './students/create/students-create.component';
import { studentsEditComponent } from './students/edit/students-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    //groups
    GroupsComponent,
    GroupsCreateComponent,
    GroupsEditComponent,

    //students
    StudentsComponent,
    StudentsCreateComponent,
    studentsEditComponent,

    //teachers
    TeachersComponent,
    TeachersCreateComponent,
    TeachersEditComponent,

    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
