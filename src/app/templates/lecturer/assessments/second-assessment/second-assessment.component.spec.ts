import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssessmentComponent } from './second-assessment.component';

describe('SecondAssessmentComponent', () => {
  let component: SecondAssessmentComponent;
  let fixture: ComponentFixture<SecondAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
