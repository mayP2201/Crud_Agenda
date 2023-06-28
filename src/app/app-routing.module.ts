import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-agenda',
    loadChildren: () => import('./crear-agenda/crear-agenda.module').then( m => m.CrearAgendaPageModule)
  },
  {
    path: 'editar-agenda/:id',
    loadChildren: () => import('./editar-agenda/editar-agenda.module').then( m => m.EditarAgendaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
