import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: 'nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss']
})
export class NavComponent {

    constructor(private location: Location,
                private router: Router) {

    }

    back() {
        this.location.back();
    }

    home() {
        this.router.navigate(['']);
    }

}