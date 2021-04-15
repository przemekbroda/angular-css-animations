import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDialogComponent } from './animated-dialog.component';

describe('AnimatedDialogComponent', () => {
  let component: AnimatedDialogComponent;
  let fixture: ComponentFixture<AnimatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
