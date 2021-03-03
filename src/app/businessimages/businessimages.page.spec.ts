import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessimagesPage } from './businessimages.page';

describe('BusinessimagesPage', () => {
  let component: BusinessimagesPage;
  let fixture: ComponentFixture<BusinessimagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessimagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessimagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
