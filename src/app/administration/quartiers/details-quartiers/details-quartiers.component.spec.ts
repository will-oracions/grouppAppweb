import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsQuartiersComponent } from './details-quartiers.component';

describe('DetailsQuartiersComponent', () => {
  let component: DetailsQuartiersComponent;
  let fixture: ComponentFixture<DetailsQuartiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsQuartiersComponent]
    });
    fixture = TestBed.createComponent(DetailsQuartiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
