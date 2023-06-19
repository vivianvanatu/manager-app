import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../shared/person.model";
import { PeopleService } from './../people-list/people.service';
import { Project } from "./projects.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    projectsListChanged = new Subject<Project[]>();

    private projects: Project[] = [];
    // private projects: Project[] = [
    //     new Project(
    //       'Project One',
    //       'Project one description testing...',
    //         [
    //           new Person('Dan', 100, 'dan@wepri.net'),
    //           new Person('Cris', 101, 'cris@wepri.net')
    //         ]),
    //     new Project(
    //       'Project Two',
    //       'Project two description testing...',
    //       [
    //         new Person('Mihai', 102, 'mihai@wepri.net'),
    //         new Person('Cris', 101, 'cris@wepri.net')
    //       ]),
    //   ]

    selectedProject = new EventEmitter<Project>();

    constructor(private peopleSrv: PeopleService) { }

    getAllProjects() {
        return this.projects.map(p => p);
    }

    getProjectByIndex(index: number) {
      return this.projects[index];
    }

    addAllPeople(persons: Person[]) {
      this.peopleSrv.addGroupToList(persons);
    }
    updateProjectAtIndex(i: number, project: Project){
      this.projects[i] = project;
      this.projectsListChanged.next(this.getAllProjects());
    }
    addNewProject(project: Project) {
      this.projects.push(project);
      this.projectsListChanged.next(this.projects.map( p => p));
    }
    deleteProject(i: number) {
      this.projects.splice(i, 1);
      this.projectsListChanged.next(this.projects.map( p => p));
    }
    setProjects(projects: Project[]) {
      this.projects = projects;
      this.projectsListChanged.next(this.projects.map( p => p));
    }

}
