import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    RouterLink,

  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
