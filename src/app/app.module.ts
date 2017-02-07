import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ClarityModule } from "clarity-angular";
import { AppComponent } from "./app.component";
import { ROUTING } from "./app.routing";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowStore } from "./common/stores/shows.store";
import { ShowService } from "./common/services/show.service";
import { Ng2MobxModule } from "ng2-mobx";
import { NgPipesModule } from "ngx-pipes";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { TopBarStore } from "./common/stores/top-bar.store";
import { SearchComponent } from "./search/search.component";
import { ShowResolver } from "./common/resolvers/show.resolver";
import { ActorDetailsComponent } from "./actor-details/actor-details.component";
import { ActorStore } from "./common/stores/actor.store";
import { ActorService } from "./common/services/actor.service";
import { NavComponent } from "./common/components/nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        ShowListComponent,
        ShowDetailsComponent,
        SearchComponent,
        ActorDetailsComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2MobxModule,
        NgPipesModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [ShowStore, ShowService, TopBarStore, ShowResolver, ActorStore, ActorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
