import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
items:any;
@Input () guid;
defaultaction:string="star";
resultsCounter:number;
  constructor() { }

  ngOnInit() {
  }
  getSearchResults(data:any) {
    this.items=data;
}

}
