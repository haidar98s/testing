import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Detail2Page } from './detail2.page';

describe('Detail2Page', () => {
  let component: Detail2Page;
  let fixture: ComponentFixture<Detail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Detail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
