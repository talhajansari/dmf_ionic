import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import {Camera} from 'ionic-native';

import {CaseService} from '../../providers/case-service';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
  providers: [CaseService]
})

export class CreatePage {
  caseForm: FormGroup;
  public people: any;
  public images: string[] = [];

  constructor(public navCtrl: NavController, private caseService: CaseService, private formBuilder: FormBuilder) {

    this.caseForm = formBuilder.group({
      type: [''],
      bodyPart: [''],
      durationDays: [''],
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
