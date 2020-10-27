import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-visiting',
  templateUrl: './visiting.page.html',
  styleUrls: ['./visiting.page.scss'],
})
export class VisitingPage implements OnInit {
  visitorFormGroup: FormGroup;
  typeofvisitDropDownList = [{
    value: 1,
    text: 'Meeting'
  }, {
    value: 2,
    text: 'Delivery'
  }, {
    value: 3,
    text: 'Personal'
  }];
  storedata = [];
  constructor(private fb: FormBuilder, private alertController: AlertController, private date: DatePipe) {
  }

  ngOnInit() {
    this.visitorFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      typeofvisit: [''],
      persontovisit: ['', Validators.required],
      dateofentry: ['', Validators.required],
      timeofentry: ['', Validators.required],
    });
    this.visitorFormGroup.get('dateofentry').setValue(this.date.transform(new Date(), 'dd-MM-yyyy'));
    this.visitorFormGroup.get('timeofentry').setValue(this.date.transform(new Date(), 'shortTime'));
  }



  onSubmit(event: any) {
    console.log(event);
    const objRequest = {
      name: this.visitorFormGroup.get('name').value,
      email: this.visitorFormGroup.get('email').value,
      typeofvisit: this.visitorFormGroup.get('typeofvisit').value,
      persontovisit: this.visitorFormGroup.get('persontovisit').value,
      dateofentry: this.visitorFormGroup.get('dateofentry').value,
      timeofentry: this.visitorFormGroup.get('timeofentry').value,
      timeofexit: ''
    };
    const visiting = localStorage.getItem('visitordetails');
    console.log(visiting);
    if (visiting === undefined || visiting === null || visiting === '') {
      this.storedata.push(objRequest);
      localStorage.setItem('visitordetails', JSON.stringify(this.storedata));
      this.presentAlert();
      //  this.clearformfilled();
    } else {
      for (const iterator of JSON.parse(visiting)) {
        this.storedata.push(iterator);
      }
      this.storedata.push(objRequest);
      localStorage.setItem('visitordetails', JSON.stringify(this.storedata));
      this.presentAlert();
      //   this.clearformfilled();
    }
  }

  clearformfilled() {
    this.visitorFormGroup.get('name').setValue('');
    this.visitorFormGroup.get('email').setValue('');
    this.visitorFormGroup.get('dateofentry').setValue('');
    this.visitorFormGroup.get('timeofentry').setValue('');
    this.visitorFormGroup.get('persontovisit').setValue('');
    this.visitorFormGroup.get('typeofvisit').setValue('');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Record',
      message: 'Record Add Success',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.clearformfilled();
          }
        }
      ]
    });

    await alert.present();
  }
}
