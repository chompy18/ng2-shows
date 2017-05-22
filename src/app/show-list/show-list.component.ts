import { Component } from "@angular/core";
import { data } from "./show-list.data";

@Component({
  selector: 'app-show-list',
  templateUrl: 'show-list.component.html',
  styleUrls: ['show-list.component.scss']
})
export class ShowListComponent {
  shows: any[];

  constructor() {
    this.shows = data.map(item => item.show);
  }

  navigate(show) {
      console.log(`selected show: ${show.name}`);
  }

}
