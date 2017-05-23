import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

    @Input() criteria: string;
    @Input() isLoggedIn: boolean;

    @Output() stateChange = new EventEmitter<any>();


    constructor() {
    }

    emit() {
        this.stateChange.emit({
            criteria: this.criteria,
            isLoggedIn: this.isLoggedIn
        });
    }
}
