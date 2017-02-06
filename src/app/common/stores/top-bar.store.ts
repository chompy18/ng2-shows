import { Injectable } from "@angular/core";
import { observable, action } from "mobx";

@Injectable()
export class TopBarStore {

    @observable
    criteria: string;

    @observable
    isLoggedIn: boolean = false;

    @observable
    isBlocked: boolean = false;

    constructor() {

    }

    @action
    setCriteria(criteria: string) {
        this.criteria = criteria;
    }

    @action
    setLoggedInState(state) {
        this.isLoggedIn = state;
    }

    @action
    setIsBlocked(isBlocked: boolean) {
        this.isBlocked = isBlocked;
    }
}