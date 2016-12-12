import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';


import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  loginForm: FormGroup;
  public messages: any[] = [];

  constructor(public navCtrl: NavController, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password: ['', Validators.required],
      user_type: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
    this.authService.getPing();
    this.authService.postPing();
  }

  submitLoginForm() {
    this.messages.push("Logging in");
    console.log('Submitting Login Form');
    this.authService.loginUser(this.loginForm.value, function(isSuccess, err) {
      if(isSuccess) {
        // redirect
        this.navCtrl.push(TabsPage);
      } else if (err!=null) {
        //this.messages.push(err);
      } else {
        //this.messages.push("Login failed. Please try again");
      }
    });

  }

}
