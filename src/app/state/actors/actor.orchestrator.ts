import { Injectable } from "@angular/core";
import { ActorStore } from "./actor.store";
import { ActorService } from "./actor.service";

@Injectable()
export class ActorOrchestrator {

    constructor(public store: ActorStore,
                public dataService: ActorService) {

    }

    getActorShows() {
        if (this.store.currentActor) {
            this.dataService.getActorShows(this.store.currentActor.id)
                .subscribe(credits => {
                    let shows: any[] = credits.map((credit) => {
                        return credit._embedded.show;
                    });

                    this.store.setActorShows(shows);
                });
        }
    }
}