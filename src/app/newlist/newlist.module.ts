import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlistPageRoutingModule } from './newlist-routing.module';

import { NewlistPage } from './newlist.page';
import { HttpClientModule } from '@angular/common/http';
import { NetworkService } from '../service/network.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewlistPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NetworkService,
    DatePipe
  ],
  declarations: [NewlistPage]
})
export class NewlistPageModule { }
