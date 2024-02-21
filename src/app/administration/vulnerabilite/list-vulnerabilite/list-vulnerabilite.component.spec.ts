import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVulnerabiliteComponent } from './list-vulnerabilite.component';

describe('ListVulnerabiliteComponent', () => {
  let component: ListVulnerabiliteComponent;
  let fixture: ComponentFixture<ListVulnerabiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVulnerabiliteComponent]
    });
    fixture = TestBed.createComponent(ListVulnerabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
