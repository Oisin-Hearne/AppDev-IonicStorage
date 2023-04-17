import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myStatus:string = "";

  constructor(private str:Storage) { }

  ngOnInit() {
  }

  async onSave() {
    await this.str.create();
    await this.str.set("Status", this.myStatus);
  }
}
