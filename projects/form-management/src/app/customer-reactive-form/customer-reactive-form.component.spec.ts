import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveFormComponent } from './customer-reactive-form.component';

describe('CustomerReactiveFormComponent', () => {
  let component: CustomerReactiveFormComponent;
  let fixture: ComponentFixture<CustomerReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerReactiveFormComponent]
    });
    fixture = TestBed.createComponent(CustomerReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
