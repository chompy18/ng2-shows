import { RouterModule, Routes } from "@angular/router";
import { ShowListComponent } from "./show-list/show-list.component";
import { ShowDetails } from "./show-details/show-details.component";
import { ShowDetailsGuard } from "./common/guards/can-show-details.guard";

const routes: Routes = [
    {path: '', redirectTo: 'show-list', pathMatch: 'full'},
    {path: 'show-list', component: ShowListComponent},
    {
        path: 'show-details/:id',
        component: ShowDetails,
        canActivate: [
            ShowDetailsGuard
        ]
    }
];

export const routing = RouterModule.forRoot(routes);
