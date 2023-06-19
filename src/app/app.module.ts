import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-list/people-edit/people-edit.component';
import { SharedComponent } from './shared/shared.component';
import { CustomBackgroundDirective } from './directives/custom-background.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { ProjectsDefaultComponent } from './projects/projects-default/projects-default.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    PeopleListComponent,
    PeopleEditComponent,
    SharedComponent,
    CustomBackgroundDirective,
    DropdownDirective,
    ProjectsDefaultComponent,
    ProjectsEditComponent,
    NotFoundComponent,
    AuthComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
