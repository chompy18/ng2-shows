import { Component } from "@angular/core";
import { HeaderStore } from "../state/header.store";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

    constructor(private headerStore: HeaderStore) {
    }

}
