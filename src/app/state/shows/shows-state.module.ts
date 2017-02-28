import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2MobxModule } from "ng2-mobx";
import { ShowService } from "./show.service";
import { ShowStore } from "./shows.store";
import { ShowsOrchestrator } from "./shows.orchestrator";

@NgModule({
    imports: [
        CommonModule,
        Ng2MobxModule
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
        Ng2MobxModule
    ],
    providers: [
        ShowStore,
        ShowService,
        ShowsOrchestrator
    ]
})
export class ShowsStateTestModule {

}