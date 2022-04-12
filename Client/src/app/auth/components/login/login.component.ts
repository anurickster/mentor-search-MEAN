import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// export class LoginComponent implements OnInit {

  
//   constructor(private loginService: LoginService) {}

//   setAuth() {
//     this.loginService.login();
//     console.log(`on login button click getauth value`, this.loginService.getAuth());
//   }

//   ngOnInit(): void {
//     console.log(`on login load getauth value`, this.loginService.getAuth());
    
//   }
// }

export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
      
    });
  }
  
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password

      })
      if(user){
        alert("Login Successful!!");
        this.loginForm.reset();
        this.router.navigate(['/view']);
      }else{
        alert('User Not Found!!');
      }

    },err=>{
      alert("Login Failed!!");
    
    })

  }
}
