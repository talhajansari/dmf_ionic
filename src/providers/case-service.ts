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

  createCase(caseData, images) {
    console.log('Creating case');
    console.log(caseData);
    var data = {
      type: caseData.type,
      bodyPart: caseData.body_part,
      durationDays: caseData.durationDays,
      description: caseData.description,
      images: images
    }
    super.postData('case/create', data)
  }

}
