import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardSkeletonComponent } from './dashoard-skeleton.component';

describe('DashoardSkeletonComponent', () => {
  let component: DashoardSkeletonComponent;
  let fixture: ComponentFixture<DashoardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashoardSkeletonComponent]
    });
    fixture = TestBed.createComponent(DashoardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
