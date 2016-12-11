import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MainService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MainService {

protected url: string = 'http://localhost:8080/api';

  constructor(protected http: Http ) {
    console.log('MainService Provider Initialized');
  }

  getPing() {
    var results = this.getData('/ping');
    return results;

  }
  postPing() {
    var data = {email: 'test@email.com', password:'passw0rd'};
    var results = this.postData('/ping', data);
    return results;

  }

  getData(endpoint: string) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }
    var url = this.url + endpoint;

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      console.log(url);
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          var data = data.data;
          console.log(data);
          resolve(data);
        });
    });
  }

  postData(endpoint: string, data: any) {
    var url = this.url + endpoint;
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post(url, data)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          var data = data;
          console.log(data);
          resolve(data);
        });
    });
  }

}
