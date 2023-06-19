import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDefaultComponent } from './projects/projects-default/projects-default.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard, LoginGuard } from './auth-guard.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      { path:'', component: ProjectsDefaultComponent },
      { path:'new', component: ProjectsEditComponent },
      { path:':id', component: ProjectDetailComponent },
      { path:':id/edit', component: ProjectsEditComponent },
    ]
  },
  { path: 'people', component: PeopleListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'auth', component: AuthComponent,
    canActivate: [LoginGuard],
  },
  { path:'**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
