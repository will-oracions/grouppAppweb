import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResidenceComponent } from './list-residence.component';

describe('ListResidenceComponent', () => {
  let component: ListResidenceComponent;
  let fixture: ComponentFixture<ListResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResidenceComponent]
    });
    fixture = TestBed.createComponent(ListResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
