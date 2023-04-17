import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; //Necessary!

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string = "";

  //Use constructor to initialize Storage.
  constructor(private str:Storage) { }

  ngOnInit() {
  }

  //Must use async/await (remember from xamarin?), as file saving may take time.

  async onSave() {
    await this.str.create();
    //Save myStatus.
    await this.str.set("Status", this.myStatus);
  }
}
