import { Component} from '@angular/core';
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
  error_message: string;

  constructor(public navCtrl: NavController, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password: ['', Validators.required]
      // user_type: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  submitLoginForm() {

    var that = this;

    console.log('Submitting Login Form');
    
    that.authService.loginUser(this.loginForm.value)
      .then (function(result) {
        if (result.error_code == 1) {
          that.error_message = "Please enter valid email and/or password";
    
        } else if (result.error_code == 2) {
          that.error_message = "We can't login at the time. Please try later.";
      
        } else if (result.user != null) {
        
          if (result.user.is_patient) {
            that.navCtrl.push(TabsPage);
          } else if (result.is_doctor) {
            that.error_message = "Doctor's page coming soon!";    
          } else {
            that.error_message = "Invalid user profile.";  
          }

        }

      });
    

  }

}
