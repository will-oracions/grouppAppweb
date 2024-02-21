import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSkeletonComponent } from './general-skeleton.component';

describe('GeneralSkeletonComponent', () => {
  let component: GeneralSkeletonComponent;
  let fixture: ComponentFixture<GeneralSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSkeletonComponent]
    });
    fixture = TestBed.createComponent(GeneralSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
