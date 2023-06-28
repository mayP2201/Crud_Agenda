import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAgendaPage } from './crear-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAgendaPageRoutingModule {}
