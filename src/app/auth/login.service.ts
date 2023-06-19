import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

export interface AuthRes {
    idToken:	string;
    email:	string;
    refreshToken:	string;
    expiresIn:	string;
    localId:	string;
    registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    ) { }

  signUp(email: string, password: string) {
    return this.http
    .post<AuthRes>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
    {
      email,
      password,
      returnSecureToken: true
    })
    .pipe(catchError(err => {
      let errorMsg = 'An error occured!';
      if(err && err.error && err.error.error) {
        switch(err.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMsg = 'The email address is already in use by another account.'
            break;
          case 'OPERATION_NOT_ALLOWED':
            errorMsg = 'Password sign-in is disabled for this project.'
            break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMsg = 'We have blocked all requests from this device due to unusual activity. Try again later.'
            break;
        }
      }
      throw errorMsg;
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthRes>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
      )
      .pipe(catchError(err => {
        let errorMsg = 'An error occured!';
        if(err && err.error && err.error.error) {
          switch(err.error.error.message) {
            case 'EMAIL_NOT_FOUND':
              errorMsg = 'There is no user record corresponding to this identifier. The user may have been deleted.'
              break;
            case 'INVALID_PASSWORD':
              errorMsg = 'The password is invalid or the user does not have a password.'
              break;
            case 'USER_DISABLED':
              errorMsg = 'The user account has been disabled by an administrator.'
              break;
          }
        }
        throw errorMsg;
      }));
  }
  saveLoginData(authres: AuthRes) {
    localStorage.setItem('token', authres.idToken);
    let currentTimestamp = new Date().getTime();
    currentTimestamp += +authres.expiresIn * 1000;
    localStorage.setItem('expireTimestamp', currentTimestamp.toString());
    this.authService.token.next(authres.idToken);
    this.router.navigate(['/projects']);
  }
  checkUserLoginState() {
    this.router.events.subscribe( res => {
      const currentTimestamp = new Date().getTime();
      const expireTimestamp = +localStorage.getItem('expireTimestamp');
      if(currentTimestamp > expireTimestamp && expireTimestamp !== 0){
        localStorage.clear();
        this.authService.token.next(null);
        this.router.navigate(['/auth']);
      }
    })
  }
}
