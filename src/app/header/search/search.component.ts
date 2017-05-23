import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-search',
    styleUrls: ['search.component.scss'],
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    @Input()
    criteria: string;

    @Output()
    criteriaChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    doSearch() {
        this.criteriaChange.emit(this.criteria);
    }

}
