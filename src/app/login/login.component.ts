import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  public resetPasswordEmail!: string;
  public isValidEmail!: boolean;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.http.get<any>('http://localhost:3000/login').subscribe(
      (res) => {
        const user =
          res.email === this.formValue.value.email &&
          res.password === this.formValue.value.password;
        if (user) {
          // alert('successfully logged in');
          this.toast.success({
            detail: 'Success Message',
            summary: 'User login Successfull',
            duration: 9000,
          });
          this.formValue.reset();
          this.router.navigate(['restuarent']);
          localStorage.setItem(
            'token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          );
          this.formValue.value.email
            ? localStorage.setItem('usertype', 'employee')
            : '';
        } else {
          // alert('User not found with these credentials');
          this.toast.error({
            detail: 'Error Message',
            summary: 'User not found with these credentials',
            duration: 8000,
          });
        }
      },
      (error) => {
        // alert('Somthing Went Wrong');
        this.toast.warning({
          detail: 'Error Message',
          summary: 'Somthing Went Wrong',
          duration: 8000,
        });
      },
    );
  }

  checkValidEmail(event: string) {
    const value = event;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

  confirmToSend() {
    if (this.checkValidEmail(this.resetPasswordEmail)) {
      console.log(this.resetPasswordEmail);
      this.resetPasswordEmail = '';
      const buttonRef = document.getElementById('closeBtn');
      buttonRef?.click();
    }
  }

  public forgotPassword = (forgotPasswordFormValue) => {
    this.showError = this.showSuccess = false;
    const forgotPass = { ...forgotPasswordFormValue };
    const forgotPassDto: ForgotPasswordDto = {
      email: forgotPass.email,
      clientURI: 'http://localhost:4200/authentication/resetpassword'
    }
    this._authService.forgotPassword('api/accounts/forgotpassword', forgotPassDto)
    .subscribe({
      next: (_) => {
      this.showSuccess = true;
      this.successMessage = 'The link has been sent, please check your email to reset your password.'
    },
    error: (err: HttpErrorResponse) => {
      this.showError = true;
      this.errorMessage = err.message;
    }})
}
