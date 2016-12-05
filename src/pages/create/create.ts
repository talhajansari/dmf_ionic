import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import {Camera} from 'ionic-native';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})

export class CreatePage {
  case: FormGroup;
  public images: string[] = [];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.case = formBuilder.group({
      type: [''],
      bodyPart: [''],
      duration: [''],
      description: [''],
    });
  }

  submitCreateCaseForm () {
    console.log(this.case)
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
