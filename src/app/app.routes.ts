import { Routes } from '@angular/router';
import {Component} from '@angular/core';

import { Home} from './pages/home/home';
import {Projects} from './pages/projects/projects';
import {AboutMe} from './pages/about-me/about-me';
import {Contact} from './pages/contact/contact';


export const routes: Routes = [
  {
    path: '',
    component:Home
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path:'about',
    component:AboutMe
  },
  {
    path:'contact',
    component:Contact
  }

];
