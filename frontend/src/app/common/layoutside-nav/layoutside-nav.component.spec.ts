import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsideNavComponent } from './layoutside-nav.component';

describe('LayoutsideNavComponent', () => {
  let component: LayoutsideNavComponent;
  let fixture: ComponentFixture<LayoutsideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
