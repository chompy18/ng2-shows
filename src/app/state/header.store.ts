import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HeaderStore {

    // don't expose the subject directly to store clients, instead we expose an observable.
    // This is to prevent the service clients from themselves emitting store values directly
    // instead of calling action methods, and therefore bypassing the store.

    private criteriaSubject: BehaviorSubject<string> = new BehaviorSubject('');
    private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public readonly criteriaObservable: Observable<string> = this.criteriaSubject.asObservable();
    public readonly isLoggedInObservable: Observable<boolean> = this.isLoggedInSubject.asObservable();

    public set criteria(criteria: string) {
        this.criteriaSubject.next(criteria);
    }

    public get criteria(): string {
        return this.criteriaSubject.getValue();
    }

    public set isLoggedIn(isLoggedIn: boolean) {
        this.isLoggedInSubject.next(isLoggedIn);
    }

    public get isLoggedIn(): boolean {
        return this.isLoggedInSubject.getValue();
    }
}
