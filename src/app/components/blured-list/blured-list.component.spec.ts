import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluredListComponent } from './blured-list.component';

describe('BluredListComponent', () => {
  let component: BluredListComponent;
  let fixture: ComponentFixture<BluredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
