import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  criteria: string;
  isLoggedIn: boolean;

  constructor() {
    this.criteria = "Bad";
    this.isLoggedIn = false;
  }

  handleStateChange(data) {
    this.criteria = data.criteria;
    this.isLoggedIn = data.isLoggedIn;
    console.log(`state: [criteria: ${this.criteria}], [isLoggedIn: ${this.isLoggedIn}]`);
  }

}
