import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnesComponent } from './list-personnes.component';

describe('ListPersonnesComponent', () => {
  let component: ListPersonnesComponent;
  let fixture: ComponentFixture<ListPersonnesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPersonnesComponent]
    });
    fixture = TestBed.createComponent(ListPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
