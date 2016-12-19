import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Config } from '../config';
import 'rxjs/add/operator/map';

/*
  Generated class for the MainService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MainService {


//protected url: string = 'http://100.8.202.32/api';
protected url: string;

protected storage: Storage = new Storage();


  constructor(protected http: Http) {
    
    var config = new Config();
    this.url = 'http://' + config.get('api_url');
    console.log('MainService Provider Initialized at ' + this.url);
  }

  // getPing() {
  //   this.getData('/ping')
  //   .then(function(data) {
  //     console.log(data);
  //   })
  // }

  // postPing() {
  //   var data = {email: 'test@email.com', password:'passw0rd'};
  //   this.postData('/ping', data)
  //   .then(function(data) {
  //      console.log(data);
  //   })

  // }

  private setAuthorizationHeader(headers: Headers) {
    this.storage.get('auth_token')
     .then(function(value) {
        headers.append('Content-TypeA', 'application/blah-bah');
        headers.append('authorization', 'khgghjasgdjh');
      //  console.log('Storage token:');
      //  console.log(value);
      //  if (value != null) {
      //   console.log("Setting auth header:");
      //   headers.append('Authorization', value);
      // }
     })
    
  }

  getData(endpoint: string) :Promise<any> {
    var that = this;
    var url = this.url + endpoint;
    
    
    //this.setAuthorizationHeader(headers);
    return this.storage.get('auth_token')
    .then(function (value) {

      let headers = new Headers();

      if (value != null) {
        headers.append('Authorization', value);
      }

      // don't have the data yet
      return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(url, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          var data = data;
          console.log(data);
          resolve(data);
        });
      });
      
    });
    


  }

  postData(endpoint: string, data: any) :Promise<any> {
    var that = this;
    var url = this.url + endpoint;
    
    return this.storage.get('auth_token')
    .then (function(value) {
      let headers = new Headers();

      if (value != null) {
        headers.append('Authorization', value);
      }

      return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      that.http.post(url, data, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          var data = data;
          console.log(data);
          resolve(data);
        });
      });

    });
    

  }

}
