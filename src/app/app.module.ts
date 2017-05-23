import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { HeaderModule } from "./header/header.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HeaderModule,
    ],
    declarations: [
        AppComponent,
        ShowListComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
