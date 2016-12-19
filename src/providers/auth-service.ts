import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Storage } from '@ionic/storage';
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

  loginUser(loginData):Promise<any> {
    var that = this;
    var data = {
      email: loginData.email,
      password: loginData.password,
      user_type: loginData.user_type
    };

    return super.postData('/login', data)
    .then(function(result: any) {

      var return_data: any = {}
      
      if (result.error != null) {
        return_data = {user: null, error_code: 2,};
      
      } else if (result.data==null || result.data.token==null || result.data.user==null) {
        return_data = {user: null, error_code: 1,};

      } else  {
        that.storage.set('auth_token', result.data.token);
        that.storage.set('user_profile', result.data.user);
        return_data = {user: result.data.user, error_code: null,};  
      }

      return new Promise(resolve => { resolve(return_data) });
    });
    
  }

}
