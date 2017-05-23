import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-show-tile',
    styleUrls: ['show-tile.component.scss'],
    templateUrl: 'show-tile.component.html'
})
export class ShowTileComponent {

    @Input() show: any;

    @Output() showSelected = new EventEmitter<any>();

    constructor() {

    }

    selectShow() {
        this.showSelected.emit(this.show);
    }
}
