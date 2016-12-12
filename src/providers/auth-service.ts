import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MainService } from './main-service';

/*
  Generated class for the CaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService extends MainService {

  constructor(protected http: Http ) {
    super(http);
    console.log('Hello authService Provider');
  }

  loginUser(loginData, cb: Function) {
    console.log('Logging user');
    var data = {
      email: loginData.email,
      password: loginData.password,
      user_type: loginData.user_type
    };
    super.postData('/login', data)
    .then(function(result: any) {
      console.log(result);
      if (result.error != null) {
        // set/save the token here
        cb(false, result.error);
      }
      if (result.success==true && result.datatoken!=null) {
        console.log(result.token);
        cb(true, null);
      }
        cb(false, null);
    })
  }

}
