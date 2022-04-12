import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      mobile:[''],
      password:[''],
      confirmPassword:['']
    })
  }

  signUp(){
     this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
      .subscribe(res=>{
        alert("Signup Successful");
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },err=>{
        alert("Signup Failed");
      })
  }
}
