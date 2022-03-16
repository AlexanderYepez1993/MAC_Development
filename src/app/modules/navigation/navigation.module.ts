import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/primeng.module';

import { NavigationRoutingModule } from './navigation-routing.module';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    PrimeNGModule
  ]
})
export class NavigationModule { }
