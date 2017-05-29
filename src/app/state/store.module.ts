import { NgModule } from "@angular/core";
import { ShowsStore } from "./shows.store";
import { HeaderStore } from "./header.store";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        HeaderStore,
        ShowsStore,
    ],
})
export class StoreModule {

}
