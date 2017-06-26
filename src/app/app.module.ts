import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ShowListComponent } from "./show-list/show-list.component";
import { HeaderModule } from "./header/header.module";
import { ShowTileComponent } from "./show-list/show-tile/show-tile.component";
import { ArrayJoinPipe } from "./common/pipes/array-join.pipe";
import { routing } from "./app.routes";
import { StoreModule } from "./state/store.module";
import { ShowDetails } from "./show-details/show-details.component";
import { ShowDetailsGuard } from "./common/guards/can-show-details.guard";
import { NgPipesModule } from "ngx-pipes";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        HeaderModule,
        StoreModule,
        NgPipesModule,
    ],
    declarations: [
        AppComponent,
        ShowListComponent,
        ShowTileComponent,
        ShowDetails,
        ArrayJoinPipe,
    ],
    providers: [
        ShowDetailsGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
