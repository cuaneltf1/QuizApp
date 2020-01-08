import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { AppUser } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserStream = new ReplaySubject<AppUser>(1);
  $currentUser = this.currentUserStream.asObservable();

  private loginErrorStream = new Subject<string>();
  $loginError = this.loginErrorStream.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<AppUser>(`http://localhost:8080/QuizApp/auth/session-user`, {
      withCredentials: true
    }).subscribe(
      data => {
        this.currentUserStream.next(data);
      },
      err => {
        this.loginErrorStream.next('not currently logged in');
      }
    );
   }

   login(credentials) {
     this.httpClient.post<AppUser>(`http://localhost:8080/QuizApp/auth/login`, credentials, {
       withCredentials: true
     }).subscribe(
       data => {
         if (data.authority === 1) {
         this.router.navigateByUrl('/home');
         this.currentUserStream.next(data);
        } else {
          this.router.navigateByUrl('/hafh');
        }
       },
       err => {
         this.loginErrorStream.next('Failed to log in');
       }
     );
   }
}
