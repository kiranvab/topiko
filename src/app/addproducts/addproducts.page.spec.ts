import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddproductsPage } from './addproducts.page';

describe('AddproductsPage', () => {
  let component: AddproductsPage;
  let fixture: ComponentFixture<AddproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
