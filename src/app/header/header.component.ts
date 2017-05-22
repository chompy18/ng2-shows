import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() criteria: string;
  @Input() isLoggedIn: boolean;

  @Output() stateChange = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  emit() {
    this.stateChange.emit({
      criteria: this.criteria,
      isLoggedIn: this.isLoggedIn
    });
  }
}
