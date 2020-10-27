import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NewResponse } from '../models/newlistresponse';
import { NetworkService } from '../service/network.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
  articleslist = [];
  noimages = 'assets/noimage.png';
  loader;
  constructor(private network: NetworkService, private date: DatePipe, private loading: LoadingController) { }

  ngOnInit() {
    this.getnewlist(this.date.transform(new Date(), 'yyyy-MM-dd'));
  }


  getnewlist(date: any) {
    this.presentLoader();
    this.network.newslist(date).subscribe((respone: NewResponse) => {
      if (respone.status === 'ok') {
        for (const iterator of respone.articles) {
          if (iterator.urlToImage === null) {
            iterator.urlToImage = this.noimages;
            this.articleslist.push(iterator);
          } else {
            this.articleslist.push(iterator);
          }
        }
        console.log(this.articleslist);
        this.loading.dismiss();
      }
    }, err => {

    });
  }

  async presentLoader() {
    this.loader = await this.loading.create({
      message: 'Loading..'
    });
    await this.loader.present();
  }
}
