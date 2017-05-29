import { Component, OnInit } from "@angular/core";
import { ShowsStore } from "../state/shows.store";
import { ShowListService } from "./show-list.service";
import { HeaderStore } from "../state/header.store";

@Component({
    selector: 'app-show-list',
    templateUrl: 'show-list.component.html',
    styleUrls: ['show-list.component.scss'],
    providers: [ShowListService],
})
export class ShowListComponent implements OnInit {

    shows: any[];

    constructor(private showsStore: ShowsStore,
                private headerStore: HeaderStore,
                private showListService: ShowListService) {
    }

    ngOnInit() {
        // this is dirty, we will see how to clean this up later on...
        this.headerStore.criteriaObservable.subscribe(
            criteria => this.showListService.getShows(criteria).subscribe(
                shows => {
                    this.showsStore.shows = shows
                        .map(item => item.show)
                        .filter(item => !!item.image);
                }
            )
        );

        this.showsStore.showsObservable.subscribe(
            shows => this.shows = shows
        );
    }

    navigate(show) {
        console.log(`selected show: ${show.name}`);
    }

}
