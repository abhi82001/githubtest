import { SignInData } from './../model/signinData';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isFormInvalid = false;
  areCredentialsIsInvalid = false;


  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if(!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsIsInvalid = false;
      return;
    }
   this.checkCredentials(signInForm);


  }
  private checkCredentials(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
     if (!this.authenticationService.authenticate(signInData)) {
      this.isFormInvalid = false;
      this.areCredentialsIsInvalid = true;
    }
  }
}
