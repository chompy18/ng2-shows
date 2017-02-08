import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Routes, RouterModule } from "@angular/router";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { ActorDetailsComponent } from "./actor-details/actor-details.component";
import { ShowService } from "./show-list/show.service";
import { ShowResolver } from "./resolvers/show.resolver";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'showlist', pathMatch: 'full'},
    {
        path: 'showlist',
        component: ShowListComponent
    },
    {
        path: 'show/:id',
        component: ShowDetailsComponent,
        canActivate: [ShowService],
        resolve: {
            show: ShowResolver
        }
    },
    {
        path: 'actor/:id',
        component: ActorDetailsComponent
    },
    {
        path: '**',
        redirectTo: 'showlist'
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
