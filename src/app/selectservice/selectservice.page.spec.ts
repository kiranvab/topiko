import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectservicePage } from './selectservice.page';

describe('SelectservicePage', () => {
  let component: SelectservicePage;
  let fixture: ComponentFixture<SelectservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
