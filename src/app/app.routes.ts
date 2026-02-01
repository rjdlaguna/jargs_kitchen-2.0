import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/pages/menu/menu.component').then(m => m.MenuComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/pages/cart-page/cart-page.component').then(m => m.CartComponent),
  },



];
