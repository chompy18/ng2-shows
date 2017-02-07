import { Component } from "@angular/core";
import { ShowStore } from "../common/stores/shows.store";
import { ActorStore } from "../common/stores/actor.store";
import { Router } from "@angular/router";

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