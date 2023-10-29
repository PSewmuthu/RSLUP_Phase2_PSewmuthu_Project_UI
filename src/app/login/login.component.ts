import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user =
          res.email === this.formValue.value.email &&
          res.password === this.formValue.value.password;
        if (user) {
          alert('User successfull Login');
        } else {
          alert('User not found with these credentials');
        }
      },
      (error) => {
        alert('Somthing Went Wrong');
      }
    );
  }
}
