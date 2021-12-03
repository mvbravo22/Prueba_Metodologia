import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor( private http: HttpClient)  {}
//Ruta del servidor Mongodb de donde se esta realizando la operaciones Crud
url='http://localhost:4000/api/autos/';
//Este metodo es el que permite mostar en la tabla.
getAutos(): Observable<any> {
  return this.http.get(this.url);
}
eliminarAuto(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}
guardarAuto(auto: Auto): Observable<any> {
  return this.http.post(this.url, auto);
}
//Esta metodo es para obtener al momento de editar 
obtenerAuto(id: string): Observable<any> {
  return this.http.get(this.url + id);
}
editarAuto(id:string, auto: Auto): Observable<any>{
  return this.http.put(this.url + id, auto);
}

   
}
