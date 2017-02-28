import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ShowsOrchestrator } from "../state/shows/shows.orchestrator";
import { ActorOrchestrator } from "../state/actors/actor.orchestrator";

@Component({
    selector: 'show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: ['show-details.component.scss']
})
export class ShowDetailsComponent {

    constructor(private router: Router,
                private showOrchestrator: ShowsOrchestrator,
                private actorOrchestrator: ActorOrchestrator) {
    }

    navigate(castMember: any) {
        this.actorOrchestrator.store.setActor(castMember.person);
        this.router.navigate(['actor', castMember.person.id]);
    }
}