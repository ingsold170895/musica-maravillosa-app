import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthenticationService} from '@app/_services/authentication.service';
import {LibroContenido} from '@app/_models/LibroContenido';
import {environment} from './../../environments/environment';
import {map} from 'rxjs/operators';
import {LibroAudio} from '@app/_models/LibroAudio';
import {EjercicioOpcion, EjercicioOpcionI} from '@app/_models/EjercicioOpcion';
import {EjercicioOpcionPregunta} from '@app/_models/EjercicioOpcionPregunta';
import {EjercicioOpcionRespuesta} from '@app/_models/EjercicioOpcionRespuesta';
import {forkJoin} from 'rxjs';
import {User} from "@app/_models";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {TipoEjercicio} from "@app/_models/TipoEjercicio";


@Injectable({providedIn: 'root'})
export class EjercicioOpcionService {
  private allEjerciciosOpcion: EjercicioOpcionI[];
  private headers: HttpHeaders;
  private allEjercicioPreguntas: EjercicioOpcionPregunta[];
  private allEjercicioRespuestas: EjercicioOpcionRespuesta[];
  currentEjercicioOpcion: EjercicioOpcion;
  currentEjercicioOpcionPreguntas: EjercicioOpcionPregunta[];
  currentEjercicioOpcionRespuestas: EjercicioOpcionRespuesta[];
  ejerciciosLoaded: boolean;


  constructor(
    private http: HttpClient,
    private auhtenticationService: AuthenticationService
  ) {
    this.headers = this.auhtenticationService.headers;
  }

  getAllEjercicioOpcion() {
    console.log('Headers in EjerciioService', this.headers);
    return this.http.get<EjercicioOpcion[]>(`${environment.apiUrl}/api/ejercicio-opcions`, {
      headers: this.headers
    }).pipe(map(data => {
      console.log(data);
      this.allEjerciciosOpcion = data as EjercicioOpcionI[];
      console.log('Todos los ejercicios: ', this.allEjerciciosOpcion);
      return this.allEjerciciosOpcion;
    }));
  }

  private getEjercicioOpcionById(idEjercicioOpcion: number) {
    return this.http.get<EjercicioOpcion>(`${environment.apiUrl}/api/ejercicio-opcions/${idEjercicioOpcion}`, {
      headers: this.headers
    }).pipe(map(data => {
      this.currentEjercicioOpcion = data as EjercicioOpcion;
      console.log('Current Ejercicio Opcion: ', this.allEjerciciosOpcion);
      return this.currentEjercicioOpcion;
    }));
  }

  private getEjercicioOpcionPreguntas() {
    console.log('Headers in EjerciioService Preguntas', this.headers);
    return this.http.get<EjercicioOpcionPregunta[]>(`${environment.apiUrl}/api/ejercicio-opcion-preguntas/`, {
      headers: this.headers
    }).pipe(map(data => {
      this.allEjercicioPreguntas = data as EjercicioOpcionPregunta[];
      console.log('Las preguntas son: ', this.allEjercicioPreguntas);
      return this.allEjercicioPreguntas;
    }));
  }

  private getEjercicioOpcionRespuestas() {
    console.log('Headers in EjerciioService Respuestas', this.headers);
    return this.http.get<EjercicioOpcionRespuesta[]>(`${environment.apiUrl}/api/ejercicio-opcion-respuestas/`, {
      headers: this.headers
    }).pipe(map(data => {
      this.allEjercicioRespuestas = data as EjercicioOpcionRespuesta[];
      console.log('all respuetas: ', this.allEjercicioRespuestas);
      return this.allEjercicioRespuestas;
    }));
  }

  private getPreguntasByEjercicioId(idEjercicio: number): EjercicioOpcionPregunta[] {
    this.currentEjercicioOpcionPreguntas = this.allEjercicioPreguntas.filter(pregunta => pregunta.ejercicioOpcionId === idEjercicio);
    return this.currentEjercicioOpcionPreguntas;
  }

  private getRespuestasByEjercicioId(idEjercicio: number): EjercicioOpcionRespuesta[] {
    this.currentEjercicioOpcionRespuestas = this.allEjercicioRespuestas
      .filter(respuesta =>  this.currentEjercicioOpcionPreguntas
        .filter(p => p.ejercicioOpcionId === idEjercicio).map(pregunta => pregunta.id).includes(
          respuesta.ejercicioOpcionPreguntaId
        ));
    return this.currentEjercicioOpcionRespuestas;
  }

  cargarEjerciciosFromBD() {
    return forkJoin(
      this.getAllEjercicioOpcion(),
      this.getEjercicioOpcionPreguntas(),
      this.getEjercicioOpcionRespuestas()
    );
  }

  getEjericioOpcionById(idEjercicioOpcion: number) {
    this.currentEjercicioOpcion = this.allEjerciciosOpcion.filter(e => e.id === idEjercicioOpcion)[0] as EjercicioOpcion;
    this.currentEjercicioOpcion.preguntas = this.getPreguntasByEjercicioId(idEjercicioOpcion);
    this.currentEjercicioOpcionRespuestas = this.getRespuestasByEjercicioId(idEjercicioOpcion);
    return this.currentEjercicioOpcion;
  }

  getRespuestasByPreguntaId(preguntaId: number): EjercicioOpcionRespuesta[] {
    console.log(preguntaId);
    console.log(this.currentEjercicioOpcionRespuestas);
    return this.currentEjercicioOpcionRespuestas.filter(respuesta => respuesta.ejercicioOpcionPreguntaId === preguntaId);
  }

  getRespuestasCoreectasByEjercicio() {
    return this.currentEjercicioOpcionRespuestas.filter(respuesta => respuesta.correcta);
  }



  clearData() {
    this.allEjerciciosOpcion = null;
    this.allEjercicioPreguntas = null;
    this.allEjercicioRespuestas = null;
    this.currentEjercicioOpcion = null;
    this.currentEjercicioOpcionPreguntas = null;
    this.currentEjercicioOpcionRespuestas = null;
    this.ejerciciosLoaded = false;
  }
}
