import { NgModule } from "@angular/core";
import { NavComponent } from "./components/nav/nav.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ClarityModule } from "clarity-angular";

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
    ],
    providers: [],
    exports: [
        NavComponent
    ]
})
export class ShowsCommonModule {

}