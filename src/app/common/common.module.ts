import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ShowsStateModule } from "../state/shows/shows-state.module";
import { ActorsStateModule } from "../state/actors/actors-state.module";
import { TopBarStateModule } from "../state/top-bar/top-bar-state.module";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ShowsStateModule,
        ActorsStateModule,
        TopBarStateModule
    ],
    providers: [],
    exports: [
    ]
})
export class ShowsCommonModule {

}
