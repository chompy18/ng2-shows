import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActorStore } from "../stores/actor.store";

@Component({
    selector: 'actor-details',
    templateUrl: 'actor-details.component.html',
    styleUrls: ['actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

    constructor(private router: Router, private actorStore: ActorStore) {

    }

    ngOnInit() {
        this.actorStore.getActorShows();
    }

    navigate(show: any) {
        this.router.navigate(['show', show.id]);
    }
}
