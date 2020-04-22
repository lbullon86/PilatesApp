import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertExpenseComponent } from './insert-expense.component';

describe('InsertExpenseComponent', () => {
  let component: InsertExpenseComponent;
  let fixture: ComponentFixture<InsertExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
