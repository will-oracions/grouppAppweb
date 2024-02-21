import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormsComponent } from './generic-forms.component';

describe('GenericFormsComponent', () => {
  let component: GenericFormsComponent;
  let fixture: ComponentFixture<GenericFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFormsComponent]
    });
    fixture = TestBed.createComponent(GenericFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
