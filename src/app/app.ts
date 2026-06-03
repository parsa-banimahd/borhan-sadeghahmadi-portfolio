import { Component, signal } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {filter} from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        window.scrollTo(0, 0);


        const containers = document.querySelectorAll('div, main, section, body');
        containers.forEach(el => {
          el.scrollTop = 0;
        });

      }
    });
  }



}
