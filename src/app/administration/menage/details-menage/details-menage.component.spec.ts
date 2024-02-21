import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMenageComponent } from './details-menage.component';

describe('DetailsMenageComponent', () => {
  let component: DetailsMenageComponent;
  let fixture: ComponentFixture<DetailsMenageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMenageComponent]
    });
    fixture = TestBed.createComponent(DetailsMenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
