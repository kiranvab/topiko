import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinesstimePage } from './businesstime.page';

describe('BusinesstimePage', () => {
  let component: BusinesstimePage;
  let fixture: ComponentFixture<BusinesstimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesstimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinesstimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
