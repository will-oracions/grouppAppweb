import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommuneComponent } from './list-commune.component';

describe('ListCommuneComponent', () => {
  let component: ListCommuneComponent;
  let fixture: ComponentFixture<ListCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommuneComponent]
    });
    fixture = TestBed.createComponent(ListCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
