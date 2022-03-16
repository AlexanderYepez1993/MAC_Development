import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from '../interfaces/trabajador.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  
  private apiUrl = 'http://localhost:3000/trabajadores'

  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(this.apiUrl);
  }

}
