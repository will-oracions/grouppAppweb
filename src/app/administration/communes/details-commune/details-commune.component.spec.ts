import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommuneComponent } from './details-commune.component';

describe('DetailsCommuneComponent', () => {
  let component: DetailsCommuneComponent;
  let fixture: ComponentFixture<DetailsCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCommuneComponent]
    });
    fixture = TestBed.createComponent(DetailsCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
