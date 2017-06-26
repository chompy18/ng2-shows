import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { HeaderStore } from "../../state/header.store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShowDetailsGuard implements CanActivate {
    constructor(private headerStore: HeaderStore) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.headerStore.isLoggedIn;
    }

}
