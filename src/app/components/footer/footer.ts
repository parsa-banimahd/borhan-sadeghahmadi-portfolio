import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatIconButton} from '@angular/material/button';

import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [

    MatIconButton,
    MatTooltip
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
