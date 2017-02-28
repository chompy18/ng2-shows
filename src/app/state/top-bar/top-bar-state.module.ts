import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2MobxModule } from "ng2-mobx";
import { TopBarStore } from "./top-bar.store";
import { TopBarOrchestrator } from "./top-bar.orchestrator";

@NgModule({
    imports: [
        CommonModule,
        Ng2MobxModule
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
        Ng2MobxModule
    ],
    providers: [
        TopBarStore,
        TopBarOrchestrator
    ]
})
export class TopBarStateTestModule {

}