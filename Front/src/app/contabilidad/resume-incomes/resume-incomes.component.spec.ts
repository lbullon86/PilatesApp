import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeIncomesComponent } from './resume-incomes.component';

describe('ResumeIncomesComponent', () => {
  let component: ResumeIncomesComponent;
  let fixture: ComponentFixture<ResumeIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
