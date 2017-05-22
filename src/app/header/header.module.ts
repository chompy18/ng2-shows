import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        SearchComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}
