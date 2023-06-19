import { Component, OnInit } from '@angular/core';
import { Project } from './projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectSelected: Project | undefined;

  constructor(private projectSrv: ProjectsService) { }

  ngOnInit(): void {
    this.projectSrv.selectedProject.subscribe((project: Project) => {
      this.projectSelected = project;
      console.log('PRJ::', project);
    });
  }

}
