import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityEntryComponent } from './add-activity-entry.component';

describe('AddActivityEntryComponent', () => {
  let component: AddActivityEntryComponent;
  let fixture: ComponentFixture<AddActivityEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
