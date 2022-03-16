import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/primeng.module';

import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './trabajadores.component';


@NgModule({
  declarations: [
    TrabajadoresComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    TrabajadoresRoutingModule
  ]
})
export class TrabajadoresModule { }
