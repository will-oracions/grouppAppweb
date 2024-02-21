import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenagesComponent } from './list-menages.component';

describe('ListMenagesComponent', () => {
  let component: ListMenagesComponent;
  let fixture: ComponentFixture<ListMenagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMenagesComponent]
    });
    fixture = TestBed.createComponent(ListMenagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
