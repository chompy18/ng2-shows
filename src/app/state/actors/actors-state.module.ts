import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActorStore } from "./actor.store";
import { ActorService, ActorServiceMock } from "./actor.service";
import { ActorOrchestrator } from "./actor.orchestrator";
import {MobxAngularModule} from "mobx-angular";

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        ActorOrchestrator,
        ActorStore,
        ActorService,
    ]
})
export class ActorsStateModule {

}

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        ActorOrchestrator,
        ActorStore,
        {provide: ActorService, useClass: ActorServiceMock},
    ]
})
export class ActorsStateTestModule {

}
