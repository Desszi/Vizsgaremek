import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContectComponent } from './table-contect.component';

describe('TableContectComponent', () => {
  let component: TableContectComponent;
  let fixture: ComponentFixture<TableContectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
