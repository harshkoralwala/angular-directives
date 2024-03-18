import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-directive';
  isAtRoot: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isAtRoot = (this.router.url === '/' || event.url === '/menu');
      }
    });
  }
}
