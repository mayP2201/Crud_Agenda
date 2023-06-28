import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAgendaPageRoutingModule } from './crear-agenda-routing.module';

import { CrearAgendaPage } from './crear-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAgendaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CrearAgendaPage]
})
export class CrearAgendaPageModule {}
