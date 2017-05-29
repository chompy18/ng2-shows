import { RouterModule, Routes } from "@angular/router";
import { ShowListComponent } from "./show-list/show-list.component";

export const SHOW_LIST: string = 'show-list';

const routes: Routes = [
    {path: '', redirectTo: SHOW_LIST, pathMatch: 'full'},
    {path: SHOW_LIST, component: ShowListComponent}
];

export const routing = RouterModule.forRoot(routes);
