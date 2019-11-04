import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from 'src/app/auth/auth.service';
import {SignInError} from '../sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  providers: [AuthService],
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    if (this.authService.isSignIn()) {
      this.router.navigateByUrl('/timeline');
    }
    this.buildForm();
  }

  buildForm(): void {
    this.signInForm = this.formBuilder.group({
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\d{11}|\+?7\d{10}|[\.\-\w]+@[\.\-\w]+\.\w{2,})$/)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;

    this.authService.signIn(this.signInForm.value)
      .subscribe(
        () => {
          this.isLoading = false;
          this.router.navigateByUrl('/timeline');
        },
        (error: SignInError) => {
          this.isLoading = false;
          this.signInForm.setErrors({signInFailed: true});
        }
      );
  }

  get login() {
    return this.signInForm.get('login');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
