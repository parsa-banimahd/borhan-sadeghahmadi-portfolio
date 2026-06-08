import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { filter, takeUntil } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  private destroy$ = new Subject<void>();  

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),  
        takeUntil(this.destroy$)  
      )
      .subscribe(() => {
        window.scrollTo(0, 0);
        const containers = document.querySelectorAll('div, main, section, body');
        containers.forEach(el => {
          el.scrollTop = 0;
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}