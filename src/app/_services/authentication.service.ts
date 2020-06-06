import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map, tap, timeout} from 'rxjs/operators';
import {User} from './../_models/user';
import {environment} from './../../environments/environment';
import {Router} from '@angular/router';
import {Constants} from '@app/Constants/Constants';
import {LibroService} from "@app/_services/libro.service";


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public token: string;
  public headers: HttpHeaders;
  public isTeacher: boolean;
  public pathRoot: string;
  public isAuthenticated: boolean;

  //DATA LOADED
  tareasTeacherDataLoaded: boolean = false;
  librosDataLoaded: boolean = false;
  tareasStudentDataLoaded: boolean = false;
  usuariosAulaTeacherDataLoaded: boolean = false;
  contentPageEjercicioInteractivoDataLoaded: boolean = false;
  contentPageEjercicioOpcionDataLoaded: boolean = false;
  ejerciciosOpcionDataLoaded: boolean = false;
  pageContentsByUserAccesDataLoaded: boolean = false;
  pageAudiosByUserAccesDataLoaded: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.token = localStorage.getItem('token');
    this.currentUser = this.currentUserSubject.asObservable();
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (this.currentUserValue) {
      this.isTeacher = this.currentUserValue.idPerfil === Constants.PERFIL_PROFESOR;
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get getToken(): string {
    return this.token;
  }

  login(username: string, password: string) {
    return this.http.post<{ id_token: string }>(`${environment.apiUrl}/api/authenticate`, {username, password})
      .pipe(map(token => {
        this.isAuthenticated = true;
        localStorage.setItem('token', token.id_token); // guardar token local
        this.token = token.id_token;
        this.headers = this.headers.append('Authorization', 'Bearer ' + token.id_token);
        return token;
      }), timeout(20000));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }

  requestAccount() {
    return this.http.get<User>(`${environment.apiUrl}/api/account`, {headers: this.headers}).pipe(map(user => {
      console.log('se imprimra la data');
      console.log(user);
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user)); // guardar token local
      this.currentUserSubject = new BehaviorSubject<User>(user);
      this.isTeacher = user.idPerfil === Constants.PERFIL_PROFESOR;
      console.log(this.isTeacher);
      return user;
    }));
  }

  updatePassword(newPassword: string) {
    const params = new HttpParams()
      .set('key', newPassword);
    return this.http.get<User>(`${environment.apiUrl}/api/activate`, {
      headers: this.headers,
      params
    }).pipe(map(user => {
      console.log(user);
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user)); // guardar token local
      this.currentUserSubject = new BehaviorSubject<User>(user);
      return user;
    }));
  }

  saveDataComputer(dataComputer: string) {
    console.log('Se gauraara los datos d ela compu: ', dataComputer);
    return this.http.post<User>(`${environment.apiUrl}/api/saveDataComputer`,
      {dataComputer},
      {headers: this.headers})
      .pipe(map(user => {
        if(user){
          localStorage.setItem('currentUser', JSON.stringify(user)); // guardar token local
          this.currentUserSubject = new BehaviorSubject<User>(user);
          return user;
        }
      }));
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http.get<User>(`${environment.apiUrl}/api/changePassword?currentPassword=${currentPassword}&newPassword=${newPassword}`, {
      headers: this.headers
    }).pipe(map(user => {
      console.log(user);
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user)); // guardar token local
      this.currentUserSubject = new BehaviorSubject<User>(user);
      return user;
    }), catchError(err => {console.log(err.error.detail); throw new Error(err.error.detail);}));
  }

  forgetPassworCreateToken() {
    return this.http.get<User>(`${environment.apiUrl}/api/activate`, {headers: this.headers}).pipe(map(user => {
      console.log(user);
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user)); // guardar token local
      this.currentUserSubject = new BehaviorSubject<User>(user);
      return user;
    }));
  }

  requestResetPassword(correo: string) {
    console.log('Se enviara solicitud de reset a: ',correo);
    return this.http.post<User>(`${environment.apiUrl}/api/account/reset-password/init`,
      {correo},
      {headers: this.headers})
      .pipe(map(response => {
        console.log(response);
      }
      ));
  }


}
