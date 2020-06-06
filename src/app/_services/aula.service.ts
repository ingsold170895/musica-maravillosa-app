import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Aula} from '@app/_models/Aula';
import {environment} from '../../environments/environment';
import {concatMap, map, timeout} from "rxjs/operators";
import {AuthenticationService} from "@app/_services/authentication.service";
import {stringify} from "querystring";
import {TipoAudio} from "@app/_models/TipoAudio";
import {UsuarioAula} from "@app/_models/UsuarioAula";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {TipoEjercicio} from "@app/_models/TipoEjercicio";
import {User} from "@app/_models";
import {BehaviorSubject, from, Observable} from "rxjs";
import {Access} from "@app/_models/Access";


@Injectable({providedIn: 'root'})
export class AulaService {
  headers: HttpHeaders;
  currentAulaList: Aula[];
  isAulasTeacherLoaded: boolean;
  myStudents: UsuarioAula[];
  currentStudentsLoaded: UsuarioAula[];
  myAulaStudent: UsuarioAula;
  myStudentTeacher: User;
  currentAulaLoaded: Aula;
  subjectMyAulaStudent: BehaviorSubject<UsuarioAula>;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
    this.headers = this.authenticationService.headers;
  }

  createAula(aula: Aula) {
    return this.http.post<Aula>(`${environment.apiUrl}/api/aulas`, JSON.stringify(aula), {headers: this.headers})
      .pipe(map(aula => {
        console.log(aula);
        return aula;
      }), timeout(20000));
  }

  getAllMyClassrooms() {
    console.log('caragaremos las aulas de: ', this.authenticationService.currentUserValue.id);
    const headers = this.headers;
    return this.http.get<Aula[]>(`${environment.apiUrl}/api/aulasByUserCreationId/${this.authenticationService.currentUserValue.id}`, {headers})
      .pipe(map(aulas => {
      this.currentAulaList = aulas as Aula[];
      console.log('Mis Aulas:', this.currentAulaList);
      this.isAulasTeacherLoaded = true;
      return aulas;
    }));
  }

  getAllMyUsuarioAulas() {
    console.log('Se traera mis estudiantes');
    let idsAulasTeacher = this.currentAulaList.map(aula => aula.id) as Number[];
    return this.http.post<UsuarioAula[]>(`${environment.apiUrl}/api/usuario-aulasByidsAulasTeacher`, JSON.stringify(idsAulasTeacher), {headers: this.headers})
      .pipe(map(usuarioAula => {
        this.myStudents = usuarioAula as UsuarioAula[];
        console.log(this.myStudents);
        return usuarioAula;
      }), timeout(10000));
  }

  loadUsuarioAulasByAulaId(aula: Aula) {
    this.currentStudentsLoaded = this.myStudents.filter(student => student.aulaId === aula.id);
    this.currentAulaLoaded = aula;
  }



  getStudentByUserId(userId: number): UsuarioAula {
    return this.currentStudentsLoaded.filter(student => student.usuarioId === userId)[0];
  }


  deleteAula(aulaDelete: Aula) {
    console.log('se elminiara: ',aulaDelete );
    aulaDelete.usuarioCreacionId = null;
    return this.http.put<Aula>(`${environment.apiUrl}/api/aulas`,aulaDelete,{headers: this.headers})
      .pipe(map(aula => {
        console.log('Aula actualizada: ', aula);
      }));
  }

  deleteUsuarioAula(idUsuarioAula: number){
    console.log('se elminiara el estudiante: ', idUsuarioAula );
    return this.http.delete(`${environment.apiUrl}/api/usuario-aulas/${idUsuarioAula}`,{headers: this.headers})
      .pipe(map(response => {
        console.log(response);
      }));
  }


  //ESTUDIANTE
  registerInAula(claveAcceso: string) {
    console.log('registrando a aula con clave de Acceso', claveAcceso);
    return this.http.post<UsuarioAula>(`${environment.apiUrl}/api/registerInAulaByStudent`, {claveAcceso}, {headers: this.headers})
      .pipe(map(usuarioAula => {
        console.log('se registro en el usuarioaula:', usuarioAula);
        this.myAulaStudent = usuarioAula as UsuarioAula;
        return usuarioAula;
      }), timeout(10000));
  }

  getMyClassrom() {
    if(!this.myAulaStudent) {
      return this.http.get<UsuarioAula>(`${environment.apiUrl}/api/usuario-aulasByUsuarioId/${this.authenticationService.currentUserValue.id}`,
        {headers: this.headers})
        .pipe(map(aula => {
          this.myAulaStudent = aula as UsuarioAula;
          this.subjectMyAulaStudent = new BehaviorSubject<UsuarioAula>(this.myAulaStudent);

          console.log('Mi Aula:', this.myAulaStudent);
          return aula;
        }));
    } else {
      return this.subjectMyAulaStudent.asObservable();
    }
  }

  getMyTeacherUserData(idUsuario: number) {
    return this.http.get<User>(`${environment.apiUrl}/api/usuarios/${idUsuario}`,
      {headers: this.headers})
      .pipe(map(aula => {
        this.myAulaStudent = aula as UsuarioAula;
        console.log('Mi Aula:', this.myAulaStudent);
        return aula;
      }));
  }

  public saveStudentsInAula(idAula: number, correos: string[]){
    return from(correos).pipe(
      concatMap(correo => <Observable<any>> this.http.get(`${environment.apiUrl}/api/registerInAulaByTeacher/${idAula}/${correo}`, {headers: this.headers}))
    );
  }

  clearData() {
    this.currentAulaList = [];
    this.isAulasTeacherLoaded = false;
    this.myStudents = undefined;
    this.currentStudentsLoaded = undefined;
    this.myAulaStudent = undefined;
    this.myStudentTeacher = undefined;
  }
}
