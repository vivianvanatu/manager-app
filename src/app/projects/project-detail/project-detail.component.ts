import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../projects.model';
import { ProjectsService } from './../projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  id: number;

  constructor(private projectSrv: ProjectsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('prj detail id:', this.id);
      this.project = this.projectSrv.getProjectByIndex(this.id);
    });

  }
  addPeopleToList() {
    this.projectSrv.addAllPeople(this.project.persons);
  }
  editProject() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  deleteProject() {
    this.projectSrv.deleteProject(this.id);
    this.router.navigate(['/projects']);
    }
}
