import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAgendaPage } from './editar-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAgendaPageRoutingModule {}
