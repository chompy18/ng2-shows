import { Component, OnInit } from "@angular/core";
import { ShowDetailsService } from "./show-details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: ['show-details.component.scss'],
    providers: [ShowDetailsService]
})
export class ShowDetails implements OnInit {

    showId: number;
    show: any = {};
    seasons: any;
    cast: any;

    constructor(private route: ActivatedRoute,
                private service: ShowDetailsService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.showId = +params['id'];
            this.getShowDetails();
        });
    }

    getShowDetails() {
        this.service.getShowById(this.showId).subscribe(
            res => {
                this.show = res;
                this.seasons = res._embedded.seasons;
                this.cast = res._embedded.cast.filter(castMember => {
                    return castMember.character.image !== null;
                });

            }
        );
    }
}
