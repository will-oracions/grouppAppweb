import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonnesComponent } from './details-personnes.component';

describe('DetailsPersonnesComponent', () => {
  let component: DetailsPersonnesComponent;
  let fixture: ComponentFixture<DetailsPersonnesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPersonnesComponent]
    });
    fixture = TestBed.createComponent(DetailsPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
