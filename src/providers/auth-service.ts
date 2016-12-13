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

  loginUser(loginData) {
    var data = {
      email: loginData.email,
      password: loginData.password,
      user_type: loginData.user_type
    };
    return super.postData('/login', data);
    // .then(function(result: any) {
    //   console.log(result);
    //   return result;
    // })
  }

}
