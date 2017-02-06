import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShowStore } from "../stores/shows.store";

@Injectable()
export class ShowResolver implements Resolve<any> {

    constructor(private showStore: ShowStore) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        return this.showStore.getShowById(+route.params['id']);
    }

}