import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinesscategoryPage } from './businesscategory.page';

describe('BusinesscategoryPage', () => {
  let component: BusinesscategoryPage;
  let fixture: ComponentFixture<BusinesscategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesscategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinesscategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
