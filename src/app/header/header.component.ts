import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    this.authService.token.subscribe(res => {
      if(res) {
        this.getData();
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }
  doLogin() {
    this.authService.logIn();
  }
  doLogout() {
    this.authService.logOut();
    this.isAuthenticated = false;
  }
  saveData() {
    this.dataService.saveProjectsToDb();
  }
  getData() {
    this.dataService.getProjectsFromDb();
  }
}
