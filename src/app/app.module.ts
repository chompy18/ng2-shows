import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ROUTING } from "./app.routing";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ActorDetailsComponent } from "./actor-details/actor-details.component";
import { ShowsCommonModule } from "./common/common.module";
import { SearchComponent } from "./search/search.component";
import { ShowResolver } from "./resolvers/show.resolver";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Ng2MobxModule } from "ng2-mobx";
import { NgPipesModule } from "ngx-pipes";
import { ClarityModule } from "clarity-angular";
import { ShowActivator } from "./resolvers/show.activator";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ShowListComponent,
        ShowDetailsComponent,
        ActorDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2MobxModule,
        NgPipesModule,
        ClarityModule.forRoot(),
        ShowsCommonModule,
        ROUTING
    ],
    providers: [
        ShowResolver,
        ShowActivator
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
