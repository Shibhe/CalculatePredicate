import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLecturerPageComponent } from './main-lecturer-page.component';

describe('MainLecturerPageComponent', () => {
  let component: MainLecturerPageComponent;
  let fixture: ComponentFixture<MainLecturerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLecturerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLecturerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
