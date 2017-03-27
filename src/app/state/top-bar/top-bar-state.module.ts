import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarStore } from "./top-bar.store";
import { TopBarOrchestrator } from "./top-bar.orchestrator";
import {MobxAngularModule} from "mobx-angular";

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        TopBarStore,
        TopBarOrchestrator
    ]
})
export class TopBarStateModule {

}

@NgModule({
    imports: [
        CommonModule,
        MobxAngularModule
    ],
    providers: [
        TopBarStore,
        TopBarOrchestrator
    ]
})
export class TopBarStateTestModule {

}
