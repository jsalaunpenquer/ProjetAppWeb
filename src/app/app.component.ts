import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Projet Web Medical [The best one]';
  isAuth = false;
  
  constructor() {
    setTimeout(() => {this.isAuth = true;}, 4000);
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
