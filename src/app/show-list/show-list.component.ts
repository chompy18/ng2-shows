import { Component, OnInit } from "@angular/core";
import { ShowStore } from "../common/stores/shows.store";
import { Router } from "@angular/router";
import { TopBarStore } from "../common/stores/top-bar.store";

@Component({
    selector: 'show',
    templateUrl: 'show-list.component.html',
    styleUrls: ['show-list.component.scss'],
})
export class ShowListComponent implements OnInit {

    constructor(private router: Router,
                private showStore: ShowStore,
                private topBarStore: TopBarStore) {
    }

    ngOnInit() {
        if (this.topBarStore.criteria !== '') {
            this.showStore.getShows(this.topBarStore.criteria);
        }
    }

    navigate(show: any) {
        this.router.navigate(['show', show.id]);
    }

    doSearch() {
        this.topBarStore.setIsBlocked(false);
        this.showStore.getShows(this.topBarStore.criteria);
    }

    setLoggedIn(state) {
        this.topBarStore.setLoggedInState(state);
    }
}