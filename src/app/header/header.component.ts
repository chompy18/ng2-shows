import { Component } from "@angular/core";
import { HeaderStore } from "../state/header.store";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

    constructor(private headerStore: HeaderStore,
                private router: Router) {
    }

    handleCriteriaChanged(criteria: string) {
        this.headerStore.criteria = criteria;
        this.router.navigate(['show-list']);
    }

}
