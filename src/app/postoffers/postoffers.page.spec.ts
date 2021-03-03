import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostoffersPage } from './postoffers.page';

describe('PostoffersPage', () => {
  let component: PostoffersPage;
  let fixture: ComponentFixture<PostoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
