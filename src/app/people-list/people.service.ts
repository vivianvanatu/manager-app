import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../shared/person.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PeopleService {
    private people: Person[] = [
        new Person('Popescu', 512, 'popescu@wepri.net'),
        new Person('Ionescu', 512, 'ionescu@wepri.net'),
        new Person('Alexandrescu', 512, 'alexandrescu@wepri.net'),
      ]

    // selectedPerson = new EventEmitter<Person>();
    peopleListChanged = new Subject<Person[]>();
    personEdit = new Subject<number>();
    constructor() { }

    getAllPersons() {
        return this.people.map(p => p);
    }

    addPerson(person: Person) {
      this.people.push(person);
      this.peopleListChanged.next(this.people.map(p => p));
    }
    addGroupToList(persons: Person[]) {
      this.people.push(...persons);
      this.peopleListChanged.next(this.people.map(p => p));
    }
    getPersonFromIndex(i: number) {
      return this.people[i];
    }
    editPersonAtIndex(i: number, person: Person) {
      this.people[i] = person;
      this.peopleListChanged.next(this.people.map(p => p));

    }
    deletePerson(i: number) {
      this.people.splice(i, 1);
      this.peopleListChanged.next(this.people.map(p => p));
    }
}
