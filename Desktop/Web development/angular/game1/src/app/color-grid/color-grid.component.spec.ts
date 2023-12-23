import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridComponent } from './color-grid.component';

describe('ColorGridComponent', () => {
  let component: ColorGridComponent;
  let fixture: ComponentFixture<ColorGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorGridComponent]
    });
    fixture = TestBed.createComponent(ColorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
