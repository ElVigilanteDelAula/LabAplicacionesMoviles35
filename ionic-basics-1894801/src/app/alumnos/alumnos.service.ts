import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Alumno } from './almno.model';
import { AlumnosPageRoutingModule } from './alumnos-routing.module';
import { AlumnosPageModule } from './alumnos.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  private alumnos: Alumno[] =[{
    id: '1',
    nombre: 'Fernando',
    edad: '22',
    matricula: '1115336',
    correo: 'correo@dominio.com' 
  }];

  constructor(private http: HttpClient) { }
  getAlumnos(){
    return [...this.alumnos];
  }

  getAlumno(idAlumno: string){
    return {...this.alumnos.find(
      (alumno: Alumno)=>{
        return alumno.id === idAlumno
      }
    )}
  }

  agregarAlumno(nombre: string, edad: string,
    matricula: string,
    correo: string){
      this.alumnos.push({
        nombre,
        edad,
        matricula,
        correo,
        id: this.alumnos.length+1 +''
      })
  
  }

  borrarAlumno(idAlumno : string){
    this.alumnos =
    this.alumnos.filter((alumno: Alumno) =>{
      return  alumno.id != idAlumno
    })
  }

  getPersonajes() :Observable<any>{
    return this.http.get<any>('https://swapi.dev/api/people/',{});
  }

  getPersonaje(idPersonaje:string): Observable<any>{
    return this.http.get<any>('https://swapi.dev/api/people/${idPersonaje}',{});
  }
}
