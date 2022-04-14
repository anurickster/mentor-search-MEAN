import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.http
      .post('http://localhost:9000/auth/login', this.loginForm.value)
      .subscribe(
        (data: any) => {
          if (data.message) {
          } else {
            this.loginForm.reset();
            this.router.navigate(['/view']);
          }
        },
        (err) => {
          if (err.status === 401) {
            alert('Invalid Credentials');
          }
        }
      );
    console.log(this.loginForm.value);
  }
}

//       (res) => {
//         const user = res.find((a: any) => {
//           return (
//             a.email === this.loginForm.value.email &&
//             a.password === this.loginForm.value.password
//           );
//         });
//         if (user) {
//           alert('Login Successful!!');
//           this.loginForm.reset();
//           this.router.navigate(['/view']);
//         } else {
//           alert('Invalid Credential!!');
//         }
//       },
//       (err) => {
//         alert('Login Failed!!');
//       }
//     );
//   }
// }
