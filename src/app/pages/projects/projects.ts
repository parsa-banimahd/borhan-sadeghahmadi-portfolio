import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  imports: [

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeTab: 'music' | 'animation' | 'painting' = 'music';


  scrollToProjects() {
    const element = document.getElementById('portfolio-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
