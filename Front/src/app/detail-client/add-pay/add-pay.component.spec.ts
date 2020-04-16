import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayComponent } from './add-pay.component';

describe('AddPayComponent', () => {
  let component: AddPayComponent;
  let fixture: ComponentFixture<AddPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
