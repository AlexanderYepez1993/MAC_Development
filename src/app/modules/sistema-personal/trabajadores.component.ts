import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Trabajador } from '../../modules/sistema-personal/interfaces/trabajador.interface';

import { TrabajadoresService } from '../../modules/sistema-personal/services/trabajadores.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.scss']
})
export class TrabajadoresComponent implements OnInit {

  trabajadores!: Trabajador[]

  constructor(private trabajadorSvc: TrabajadoresService) { }

  ngOnInit(): void {
    this.trabajadorSvc.getTrabajadores()
    .pipe(
      tap( (trabajadores: Trabajador[]) => this.trabajadores = trabajadores )
    )
    .subscribe();
  }

}
