import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/primeng.module';

import { AsistenciaRoutingModule } from './asistencia-routing.module';

import { AsistenciaComponent } from './asistencia.component';
import { RegistrarAsistenciaComponent } from './components/registrar-asistencia/registrar-asistencia.component';


@NgModule({
  declarations: [
    AsistenciaComponent,
    RegistrarAsistenciaComponent
  ],
  imports: [
    AsistenciaRoutingModule,
    CommonModule,
    PrimeNGModule
  ]
})
export class AsistenciaModule { }
