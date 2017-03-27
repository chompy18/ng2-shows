import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShowService } from "./show.service";
import { ShowStore } from "./shows.store";
import { ShowsOrchestrator } from "./shows.orchestrator";
import {MobxAngularModule} from "mobx-angular";

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        ShowStore,
        ShowService,
        ShowsOrchestrator
    ]
})
export class ShowsStateModule {

}

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        ShowStore,
        ShowService,
        ShowsOrchestrator
    ]
})
export class ShowsStateTestModule {

}
