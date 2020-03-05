import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetuserPage } from './detuser.page';

describe('DetuserPage', () => {
  let component: DetuserPage;
  let fixture: ComponentFixture<DetuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
