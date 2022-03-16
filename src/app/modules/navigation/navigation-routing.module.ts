import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent,
    children: [
      { path: 'trabajadores', loadChildren: () => import('../../modules/sistema-personal/trabajadores.module').then(m => m.TrabajadoresModule) },
      { path: 'asistencia', loadChildren: () => import('../../modules/sistema-asistencia/asistencia.module').then(m => m.AsistenciaModule) },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }