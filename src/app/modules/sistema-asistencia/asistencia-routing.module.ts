import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia.component';
import { RegistrarAsistenciaComponent } from './components/registrar-asistencia/registrar-asistencia.component';

const routes: Routes = [
  { path: '', component: AsistenciaComponent,
      children: [
        { path: 'regAsistencia', component: RegistrarAsistenciaComponent },
        { path: '**', redirectTo: '' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }
