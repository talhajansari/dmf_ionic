import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup } from '@angular/forms';

import {Camera} from 'ionic-native';

import {CaseService} from '../../providers/case-service';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
  providers: [CaseService]
})

export class CreatePage {
  caseForm: FormGroup;

  public images: string[] = [];

  constructor(public navCtrl: NavController, private caseService: CaseService, private formBuilder: FormBuilder) {

    this.caseForm = formBuilder.group({
      case_type: [''],
      body_part: [''],
      duration_days: [''],
      description: [''],
    });
  }


  submitCreateCaseForm () {
    console.log(this.caseForm);
    this.caseService.createCase(this.caseForm.value, this.images);

  }

  takePicture() {
    Camera.getPicture().then((imageData) => {
      // imageData is a base64 encoded string
        this.images.push(imageData);
    }, (err) => {
        console.log(err);
    });
  }

}
