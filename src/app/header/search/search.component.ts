import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-search',
  styleUrls: ['search.component.scss'],
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  @Input()
  criteria: string;

  @Output()
  criteriaChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  doSearch() {
    this.criteriaChange.emit(this.criteria);
  }

}
