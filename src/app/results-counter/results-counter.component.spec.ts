import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCounterComponent } from './results-counter.component';

describe('ResultsCounterComponent', () => {
  let component: ResultsCounterComponent;
  let fixture: ComponentFixture<ResultsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
