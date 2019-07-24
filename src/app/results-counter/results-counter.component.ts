import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-counter',
  templateUrl: './results-counter.component.html',
  styleUrls: ['./results-counter.component.scss']
})
export class ResultsCounterComponent implements OnInit {
  @Input () resultsCounter;
  constructor() {
  }

  ngOnInit() {
  }

}
