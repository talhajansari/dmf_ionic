import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Camera} from 'ionic-native';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  public images: string[] = [];
  constructor(public navCtrl: NavController) {

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
