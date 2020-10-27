import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitingPage } from './visiting.page';

describe('VisitingPage', () => {
  let component: VisitingPage;
  let fixture: ComponentFixture<VisitingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
