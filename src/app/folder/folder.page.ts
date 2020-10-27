import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  visitorloglist = [];
  checkout;
  ischeckout = true;
  constructor(private alertController: AlertController, private date: DatePipe) { }

  ngOnInit() {
    this.visitorloglist = JSON.parse(localStorage.getItem('visitordetails'));
    console.log(this.visitorloglist);
  }

  exitVisitor(src: any) {
    console.log(src);
    this.presentAlert(src);
  }

  async presentAlert(src: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Time of Exit',
      message: 'Your check-out time.' + this.date.transform(new Date(), 'shortTime'),
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            for (const iterator of this.visitorloglist) {
              if (iterator.name === src.name && iterator.email === src.email && iterator.persontovisit === src.persontovisit) {
                iterator.timeofexit = this.checkout = this.date.transform(new Date(), 'shortTime');
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
