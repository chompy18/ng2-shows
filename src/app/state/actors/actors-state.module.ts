import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2MobxModule } from "ng2-mobx";
import { ActorStore } from "./actor.store";
import { ActorService } from "./actor.service";
import { ActorOrchestrator } from "./actor.orchestrator";

@NgModule({
    imports: [
        CommonModule,
        Ng2MobxModule
    ],
    providers: [
        ActorStore,
        ActorService,
        ActorOrchestrator
    ]
})
export class ActorsStateModule {

}

@NgModule({
    imports: [
        CommonModule,
        Ng2MobxModule
    ],
    providers: [
        ActorStore,
        ActorService,
        ActorOrchestrator
    ]
})
export class ActorsStateTestModule {

}