import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCloudChartComponent } from './word-cloud-chart.component';

describe('WordCloudChartComponent', () => {
  let component: WordCloudChartComponent;
  let fixture: ComponentFixture<WordCloudChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordCloudChartComponent]
    });
    fixture = TestBed.createComponent(WordCloudChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
