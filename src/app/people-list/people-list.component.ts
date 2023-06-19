import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  onReceivedData(newPerson: {name: string, uid: number, email: string}) {
    console.log('--newPerson: ', newPerson);
    this.people.push(newPerson);
  }

  constructor(private peopleSrv: PeopleService) {
    console.log('--newPerson: ', this.people);
   }

  ngOnInit(): void {
    this.people = this.peopleSrv.getAllPersons();
    this.peopleSrv.peopleListChanged.subscribe((list: Person[]) =>{
      this.people = list;
    })
  }

  onEditPerson(i: number){
    console.log('On Edit Person', i);
    this.peopleSrv.personEdit.next(i);
  }

}
