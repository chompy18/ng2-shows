import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";

@Injectable()
export class ShowService {

    BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http) {

    }

    getShows(showName: string): Observable<any> {
        const url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
        return this.http.get(url)
            .map(res => res.json());
    }

    getShowById(showId: number): Observable<any> {
        const url = this.BASE_URL + 'shows/' + showId + '?embed[]=cast&embed[]=seasons';
        return this.http.get(url)
            .map(res => res.json());
    }

}