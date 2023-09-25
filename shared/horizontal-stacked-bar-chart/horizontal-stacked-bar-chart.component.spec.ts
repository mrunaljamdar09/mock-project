import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackedBarChartComponent } from './horizontal-stacked-bar-chart.component';

describe('HorizontalStackedBarChartComponent', () => {
  let component: HorizontalStackedBarChartComponent;
  let fixture: ComponentFixture<HorizontalStackedBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalStackedBarChartComponent]
    });
    fixture = TestBed.createComponent(HorizontalStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
