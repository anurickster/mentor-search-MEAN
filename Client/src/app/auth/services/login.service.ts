import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();

  getAuth() {
    return this.authenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.authenticated = false;
    this.authStatusListener.next(this.authenticated);
    this.router.navigate(['']);
    console.log(`logout works`);
    return this.authenticated;
  }

  login() {
    this.authenticated = true;
    this.authStatusListener.next(this.authenticated);
    return this.authenticated;
  }

  authenticate(user: User) {
    return this.http
      .post('http://localhost:9000/auth/login', user)
      .subscribe((data: any) => {
        this.authenticated = data.auth;
        this.authStatusListener.next(data.auth);
        if (data.auth) {
          this.router.navigate(['view']);
        }
      });
  }
}
