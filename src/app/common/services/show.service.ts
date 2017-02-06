import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TopBarStore } from "../stores/top-bar.store";

@Injectable()
export class ShowService implements CanActivate {
    BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http,
                private topBarStore: TopBarStore) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        this.topBarStore.setIsBlocked(!this.topBarStore.isLoggedIn);
        return this.topBarStore.isLoggedIn;
    }


    getShows(showName: string): Observable<any> {
        const url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
        return this.http.get(url)
            .map(res => res.json());
    }

    getShowWithCast(showName: string): Observable<any> {
        const url = this.BASE_URL + 'singlesearch/shows?q=' + encodeURI(showName) + '&embed=cast';
        return this.http.get(url)
            .map(res => res.json());
    }

    getShowById(showId: number): Observable<any> {
        const url = this.BASE_URL + 'shows/' + showId + '?embed=cast';
        return this.http.get(url)
            .map(res => res.json());
    }
}