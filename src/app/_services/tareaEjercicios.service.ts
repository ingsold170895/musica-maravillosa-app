import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Aula} from '@app/_models/Aula';
import {environment} from '../../environments/environment';
import {map, timeout} from "rxjs/operators";
import {AuthenticationService} from "@app/_services/authentication.service";
import {stringify} from "querystring";
import {TipoAudio} from "@app/_models/TipoAudio";
import {UsuarioAula} from "@app/_models/UsuarioAula";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {TipoEjercicio} from "@app/_models/TipoEjercicio";
import {LibroService} from "@app/_services/libro.service";
import {LibroContenido} from "@app/_models/LibroContenido";


@Injectable({providedIn: 'root'})
export class TareaEjerciciosService {

  headers: HttpHeaders;

  allTareaaEjercicioOpcionRespuesta: TareaEjercicioOprecionRespuesta[];
  allTareasEjercicio: TareaEjercicio[];

  tipoEjercicios: TipoEjercicio[];
  tareaEjercicioSaved: TareaEjercicio;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService,
              private libroService: LibroService) {
    this.headers = this.authenticationService.headers;
  }

  getAllTareaEjercioOpcionRespuestaByTeacher() {
    console.log('caragaremos todos los jerciicos de todo los estudaintes de ', this.authenticationService.currentUserValue.id);
    return this.http.get<TareaEjercicioOprecionRespuesta[]>(`${environment.apiUrl}/api/tarea-ejercicio-opcion-respuestasByTeacherId/${this.authenticationService.currentUserValue.id}`,
      {headers: this.headers})
      .pipe(map(tareas => {
        this.allTareaaEjercicioOpcionRespuesta = tareas as TareaEjercicioOprecionRespuesta[];
        console.log('Tareas de mis estudiantes:', this.allTareaaEjercicioOpcionRespuesta);
        return tareas;
      }));
  }

  getAllTareaEjercioOpcionRespuestaByStudent() {
    console.log('caragaremos todos los jerciicos del estudiante ', this.authenticationService.currentUserValue.id);
    return this.http.get<TareaEjercicioOprecionRespuesta[]>(`${environment.apiUrl}/api/tarea-ejercicio-opcion-respuestasByStudentId/${this.authenticationService.currentUserValue.id}`,
      {headers: this.headers})
      .pipe(map(tareas => {
        this.allTareaaEjercicioOpcionRespuesta = tareas as TareaEjercicioOprecionRespuesta[];
        console.log('Tareas de mis estudiantes:', this.allTareaaEjercicioOpcionRespuesta);
        return tareas;
      }));
  }

  retrieveTareasEjercioFromTareasEjercicioRespuestas() {
    console.log('Se extraeram las Tareas de las TareasRespuesta');
    this.allTareasEjercicio = [];
    this.allTareaaEjercicioOpcionRespuesta.map(tareaRespuesta => {
      console.log(tareaRespuesta.tareaejercicio.id);
      if (this.allTareasEjercicio.findIndex(t => t.id == tareaRespuesta.tareaejercicio.id) === -1) {
        tareaRespuesta.tareaejercicio.tipoEjercicioNombre =
          this.tipoEjercicios.filter(tipos => tipos.id === tareaRespuesta.tareaejercicio.tipoEjercicioId)[0].nombre;
        this.allTareasEjercicio.push(tareaRespuesta.tareaejercicio);
      }
    });
    console.log('se obtuvieron', this.allTareasEjercicio);
    return this.allTareasEjercicio;
  }

  getTipoEjercicios() {
    console.log('Tipos de Audios: ');
    return this.http.get<TipoEjercicio[]>(`${environment.apiUrl}/api/tipo-ejercicios`,
      {headers: this.headers})
      .pipe(map(tipoEjercicios => {
        this.tipoEjercicios = tipoEjercicios as TipoEjercicio[];
        console.log('Tipo de Ejercisios:', this.tipoEjercicios);
        return tipoEjercicios;
      }));
  }

  getTareasEjercicioByUserId(userId: number): TareaEjercicio[] {
    console.log(this.allTareasEjercicio);
    console.log(this.libroService.allContentPageByEjercicioOpcion);
    return this.allTareasEjercicio.filter(tarea => tarea.usuarioId === userId).map(t => {
      let libroContent = this.libroService.allContentPageByEjercicioOpcion
        .filter(content => content.ejercicioOpcionId === this.allTareaaEjercicioOpcionRespuesta
          .filter(tareaRespuesta => tareaRespuesta.tareaEjercicioId === t.id)[0].ejercicioOpcionPreguntaEjercicioOpcionId)[0];
      if (libroContent) {
        t.libro = this.libroService.librosData.filter(libro => libro.id === libroContent.libroId)[0].titulo;
        t.tema = libroContent.tema;
        t.pagina = libroContent.numeroPagina;
      }
      return t;
    });
  }

  saveTareaEjercicio(tareaEjercicio: TareaEjercicio) {
    console.log('Se gauradara est ejercicio: ', tareaEjercicio);
    return this.http.post<TareaEjercicio>(`${environment.apiUrl}/api/tarea-ejercicios`,
      tareaEjercicio,
      {headers: this.headers})
      .pipe(map(response => {
          console.log(response);
          this.tareaEjercicioSaved = response as TareaEjercicio;
        }
      ));
  }


  saveTareaEjercicioRespuestas(tareaEjercicioRespuestas: TareaEjercicioOprecionRespuesta[]) {
    console.log('Se gauradaran estas respuestas: ', tareaEjercicioRespuestas);
    return this.http.post<TareaEjercicio>(`${environment.apiUrl}/api/tarea-ejercicio-opcion-respuestasByTarea`,
      tareaEjercicioRespuestas,
      {headers: this.headers})
      .pipe(map(response => {
          console.log(response);
        }
      ));
  }

  clearData() {
    this.allTareaaEjercicioOpcionRespuesta = undefined;
    this.allTareasEjercicio = undefined;
    this.tipoEjercicios = undefined;
    this.tareaEjercicioSaved = undefined;
  }
}
