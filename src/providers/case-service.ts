import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MainService } from './main-service';

/*
  Generated class for the CaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CaseService extends MainService {

  constructor(protected http: Http ) {
    super(http);
    console.log('Hello CaseService Provider');
  }

  createCase(caseData, images): Promise<any> {
    console.log('Creating case');
    console.log(caseData);
    var data = {
      case_type: caseData.case_type,
      body_part: caseData.body_part,
      duration_days: caseData.duration_days,
      description: caseData.description,
      images: images
    }
    return super.postData('/case/create', data)
  }

}
