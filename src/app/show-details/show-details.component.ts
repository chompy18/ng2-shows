import { Component, OnInit } from "@angular/core";
import { ShowStore } from "../common/stores/shows.store";

@Component({
    selector: 'show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: ['show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

    constructor(private showStore: ShowStore) {
    }

    ngOnInit() {
    }
}