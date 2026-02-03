import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '', // default landing page
        loadComponent: () =>
          import('./components/pages/landing-page/landing-page.component').then(m => m.LandingPageComponent),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./components/pages/menu/menu.component').then(m => m.MenuComponent),
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
        path: 'cart',
        loadComponent: () =>
          import('./components/pages/cart-page/cart-page.component').then(m => m.CartComponent),
      },
    ]
  },

  // Auth pages (no header/footer)
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/pages/auth/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./components/pages/auth/register/register.component').then(m => m.RegisterComponent),
      },
    ]
  }
];
