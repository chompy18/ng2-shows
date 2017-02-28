import { Injectable } from "@angular/core";
import { observable, action } from "mobx";

@Injectable()
export class ActorStore {

    @observable
    currentActor: any;

    @observable
    currentActorShows: any[] = [];

    constructor() {

    }

    @action
    setActor(actor: any) {
        this.currentActor = actor;
    }

    @action
    setActorShows(shows) {
        this.currentActorShows = shows;
    }

}