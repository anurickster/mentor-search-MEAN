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
  public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.http
      .post('http://localhost:9000/auth/signup', this.signupForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert('Signup Successful!!');
          this.signupForm.reset();
          this.router.navigate(['/']);
        }
      });
  }
}

//         (res) => {
//           alert('Signup Successful');
//           this.signupForm.reset();
//           this.router.navigate(['/login']);
//         },
//         (err) => {
//           alert('Signup Failed');
//         }
//       );
//     console.log(this.signupForm.value);
//   }
// }
