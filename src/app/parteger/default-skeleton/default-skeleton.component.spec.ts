import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSkeletonComponent } from './default-skeleton.component';

describe('DefaultSkeletonComponent', () => {
  let component: DefaultSkeletonComponent;
  let fixture: ComponentFixture<DefaultSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultSkeletonComponent]
    });
    fixture = TestBed.createComponent(DefaultSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
