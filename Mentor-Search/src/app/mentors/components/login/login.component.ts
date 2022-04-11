import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  setAuth() {
    this.loginService.login();
    console.log(`on login button click getauth value`, this.loginService.getAuth());
  }

  ngOnInit(): void {
    console.log(`on login load getauth value`, this.loginService.getAuth());
    
  }
}
