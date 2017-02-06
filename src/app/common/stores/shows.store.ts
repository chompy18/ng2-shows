import { Injectable } from "@angular/core";
import { observable, action, computed } from "mobx";
import { ShowService } from "../services/show.service";
import { Observable } from "rxjs";

@Injectable()
export class ShowStore {

    @observable
    shows: any[] = [];

    @observable
    currentShow: any = {};

    constructor(private showService: ShowService) {
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

    @action
    getShows(name: string) {
        this.showService.getShows(name)
            .subscribe(shows => this.setShows(shows));
    }

    @action
    getShowById(showId: number): Observable<any> {
        if (this.currentShow.id === showId) {
            return Observable.of(this.currentShow);
        }

        return this.showService.getShowById(showId)
            .map(show => {
                this.setCurrentShow(show);
                return show;
            })
    }

    @computed
    get currentShowCast() {
        return this.currentShow._embedded.cast.filter(castMember => {
            return castMember.character.image !== null;
        })
    }
}