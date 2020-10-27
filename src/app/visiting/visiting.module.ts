import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitingPageRoutingModule } from './visiting-routing.module';

import { VisitingPage } from './visiting.page';
import { NetworkService } from '../service/network.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitingPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    NetworkService,
    DatePipe
  ],
  declarations: [VisitingPage]
})
export class VisitingPageModule { }
