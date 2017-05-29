import { Component, OnInit } from "@angular/core";
import { HeaderStore } from "./state/header.store";
import { ShowsStore } from "./state/shows.store";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private headerStore: HeaderStore,
                private showsStore: ShowsStore) {
    }

    ngOnInit() {
        this.headerStore.isLoggedIn = true;

        this.headerStore.isLoggedInObservable.subscribe(
            isLoggedIn => console.log(`is logged in: ${isLoggedIn}`)
        );

        this.headerStore.criteriaObservable.subscribe(
            criteria => console.log(`criteria: ${criteria}`)
        );

        this.showsStore.showsObservable.subscribe(
            shows => console.log(`shows found: ${shows.length}`)
        );
    }

}
