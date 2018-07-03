import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAssessmentComponent } from './third-assessment.component';

describe('ThirdAssessmentComponent', () => {
  let component: ThirdAssessmentComponent;
  let fixture: ComponentFixture<ThirdAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
