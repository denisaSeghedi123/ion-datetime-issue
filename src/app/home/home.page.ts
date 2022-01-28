import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {

  @ViewChild('dateOfBirthModal') dateOfBirthModal: IonModal;

  constructor() {}

  public onDateOfBirthItemClick() {
    this.dateOfBirthModal.present();
  }
}
