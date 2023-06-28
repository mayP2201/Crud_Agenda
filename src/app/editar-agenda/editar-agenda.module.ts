import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAgendaPageRoutingModule } from './editar-agenda-routing.module';

import { EditarAgendaPage } from './editar-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAgendaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarAgendaPage]
})
export class EditarAgendaPageModule {}
