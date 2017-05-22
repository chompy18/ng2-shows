import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SearchComponent } from "./header/search/search.component";
import { HeaderComponent } from "./header/header.component";
import { ShowListComponent } from "./show-list/show-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    ShowListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
