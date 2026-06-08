import { Component, ChangeDetectionStrategy, signal } from '@angular/core';


@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeTab = signal<'music' | 'animation' | 'painting'>('music');


  scrollToProjects() {
    const element = document.getElementById('portfolio-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
