import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { TopBarStore } from "../common/stores/top-bar.store";

@Component({
    selector: 'search',
    styleUrls: ['search.component.scss'],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    criteria: string;

    @Output()
    criteriaChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(private topBarStore: TopBarStore) {
    }

    ngOnInit() {
        this.criteria = this.topBarStore.criteria;
    }

    doSearch() {
        this.topBarStore.setCriteria(this.criteria);
        this.criteriaChanged.emit();
    }

}