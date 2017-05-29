import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ShowListService {

    BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http) {

    }

    getShows(showName: string): Observable<any> {
        if (showName === '') {
            return Observable.of([]);
        }
        
        const url = this.BASE_URL + 'search/shows?q=' + encodeURI(showName);
        return this.http.get(url)
            .map(res => res.json())
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            })
    }
}
