import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ShowListService } from "./show-list.service";

@Component({
    selector: 'app-show-list',
    templateUrl: 'show-list.component.html',
    styleUrls: ['show-list.component.scss'],
    providers: [ShowListService],
})
export class ShowListComponent implements OnChanges {

    @Input() selectedShow: string;

    shows: any[];

    constructor(private showListService: ShowListService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.showListService.getShows(changes.selectedShow.currentValue)
            .subscribe(res => {
                this.shows = res.map(item => item.show);
            });
    }

    navigate(show) {
        console.log(`selected show: ${show.name}`);
    }

}
