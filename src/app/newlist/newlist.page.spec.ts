import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewlistPage } from './newlist.page';

describe('NewlistPage', () => {
  let component: NewlistPage;
  let fixture: ComponentFixture<NewlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
