import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Project[] = []
  prjSubscription: Subscription;

  constructor(
    private projectSrv: ProjectsService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.prjSubscription = this.projectSrv.projectsListChanged.subscribe((projects: Project[]) => {
      this.projects = projects;
    })
    this.projects = this.projectSrv.getAllProjects();
  }

  ngOnDestroy(): void {
    this.prjSubscription.unsubscribe();
  }
  newProject() {
    // this.router.navigate(['/projects/new']);
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
