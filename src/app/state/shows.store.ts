import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShowsStore {

    // don't expose the subject directly to store clients, instead we expose an observable.
    // This is to prevent the service clients from themselves emitting store values directly
    // instead of calling action methods, and therefore bypassing the store.

    private showsSubject: BehaviorSubject<any> = new BehaviorSubject('');

    public readonly showsObservable: Observable<any> = this.showsSubject.asObservable();

    public set shows(shows: any[]) {
        this.showsSubject.next(shows);
    }

    public get shows(): any[] {
        return this.showsSubject.getValue();
    }

}
