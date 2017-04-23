import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ShowsStateModule, ShowsStateTestModule } from "../state/shows/shows-state.module";
import { ActorsStateModule, ActorsStateTestModule } from "../state/actors/actors-state.module";
import { TopBarStateModule, TopBarStateTestModule } from "../state/top-bar/top-bar-state.module";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ShowsStateModule,
        ActorsStateModule,
        TopBarStateModule,
    ],
    providers: [],
    exports: [
    ]
})
export class ShowsCommonModule {

}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ShowsStateTestModule,
        ActorsStateTestModule,
        TopBarStateTestModule,
    ]
})
export class ShowsCommonTestingModule {

}
