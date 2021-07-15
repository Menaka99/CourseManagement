import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendschartComponent } from './trendschart.component';

describe('TrendschartComponent', () => {
  let component: TrendschartComponent;
  let fixture: ComponentFixture<TrendschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendschartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
