import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthAssessmentComponent } from './fifth-assessment.component';

describe('FifthAssessmentComponent', () => {
  let component: FifthAssessmentComponent;
  let fixture: ComponentFixture<FifthAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
