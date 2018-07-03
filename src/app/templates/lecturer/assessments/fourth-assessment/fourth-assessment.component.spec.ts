import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthAssessmentComponent } from './fourth-assessment.component';

describe('FourthAssessmentComponent', () => {
  let component: FourthAssessmentComponent;
  let fixture: ComponentFixture<FourthAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
