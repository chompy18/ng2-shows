import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ShowStore } from "../stores/shows.store";
import { ActorStore } from "../stores/actor.store";

@Component({
    selector: 'show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: ['show-details.component.scss']
})
export class ShowDetailsComponent {

    constructor(private router: Router,
                private showStore: ShowStore,
                private actorStore: ActorStore) {
    }

    navigate(castMember: any) {
        this.actorStore.setActor(castMember.person);
        this.router.navigate(['actor', castMember.person.id]);
    }
}