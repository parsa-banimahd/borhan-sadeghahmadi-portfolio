import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';

import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  imports: [

    MatIconButton,
    MatTooltip
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
