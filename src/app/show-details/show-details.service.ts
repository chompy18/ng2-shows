import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShowDetailsService {

    BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http) {

    }

    getShowById(showId: number): Observable<any> {
        const url = this.BASE_URL + 'shows/' + showId + '?embed[]=cast&embed[]=seasons';
        return this.http.get(url)
            .map(res => res.json());
    }
}
