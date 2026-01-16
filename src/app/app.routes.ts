import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/pages/menu/menu.component').then(m => m.MenuComponent),
  },


];
