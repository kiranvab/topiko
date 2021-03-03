import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallenquiryPage } from './callenquiry.page';

describe('CallenquiryPage', () => {
  let component: CallenquiryPage;
  let fixture: ComponentFixture<CallenquiryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallenquiryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallenquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
