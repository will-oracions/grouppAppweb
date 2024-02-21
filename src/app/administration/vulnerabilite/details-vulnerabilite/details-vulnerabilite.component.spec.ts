import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVulnerabiliteComponent } from './details-vulnerabilite.component';

describe('DetailsVulnerabiliteComponent', () => {
  let component: DetailsVulnerabiliteComponent;
  let fixture: ComponentFixture<DetailsVulnerabiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsVulnerabiliteComponent]
    });
    fixture = TestBed.createComponent(DetailsVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
