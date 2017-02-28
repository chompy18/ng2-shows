import { NgModule } from "@angular/core";
import { NavComponent } from "./components/nav/nav.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ClarityModule } from "clarity-angular";
import { ShowsStateModule } from "../state/shows/shows-state.module";
import { ActorsStateModule } from "../state/actors/actors-state.module";
import { TopBarStateModule } from "../state/top-bar/top-bar-state.module";

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ShowsStateModule,
        ActorsStateModule,
        TopBarStateModule
    ],
    providers: [],
    exports: [
        NavComponent
    ]
})
export class ShowsCommonModule {

}