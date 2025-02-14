import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'promedio',
    loadComponent: () => import('./promedio/promedio.page').then( m => m.PromedioPage)
  },
];
