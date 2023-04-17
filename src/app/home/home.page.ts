import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private str:Storage) {}

  savedStatus:string="";
  //Fired when page is displayed to user.
  async ionViewWillEnter() {

    //Get value from Storage, set it to savedStatus.
    this.savedStatus = await this.str.get("Status");
  }
}
