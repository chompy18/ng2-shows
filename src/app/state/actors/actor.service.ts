import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ActorService {

    BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http) {

    }

    getActorShows(actorId: number): Observable<any> {
        const url = this.BASE_URL + 'people/' + actorId + '/castcredits?embed=show';
        return this.http.get(url)
            .map(res => res.json());
    }
}