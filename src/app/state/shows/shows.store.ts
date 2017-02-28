import { Injectable } from "@angular/core";
import { observable, action, computed } from "mobx";

@Injectable()
export class ShowStore {

    @observable
    shows: any[] = [];

    @observable
    currentShow: any = {};

    constructor() {
    }

    @action
    setShows(shows: any[]) {
        this.shows = shows
            .map(showObj => showObj.show)
            .filter(show => show.image !== null);
    }

    @action
    setCurrentShow(show: any) {
        this.currentShow = show;
    }

    @computed
    get currentShowCast() {
        return this.currentShow._embedded.cast.filter(castMember => {
            return castMember.character.image !== null;
        })
    }

    @computed
    get currentShowSeasons() {
        return this.currentShow._embedded.seasons;
    }
}