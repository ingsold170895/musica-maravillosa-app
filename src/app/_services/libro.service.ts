import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Libro} from '@app/_models/Libro';
import {AuthenticationService} from '@app/_services/authentication.service';
import {LibroContenido} from '@app/_models/LibroContenido';
import {LibroAudio} from '@app/_models/LibroAudio';
import {Pagina} from '@app/_models/Pagina';
import {environment} from './../../environments/environment';
import {map} from 'rxjs/operators';
import {Access} from '@app/_models/Access';
import {BehaviorSubject, forkJoin, Observable, of, Subject} from 'rxjs';
import {TipoAudio} from "@app/_models/TipoAudio";
import {createPipe} from "@angular/compiler/src/core";


@Injectable({providedIn: 'root'})
export class LibroService {
  public static TIPO_AUDIO_NARRACION = 1;
  public static TIPO_AUDIO_CANCION = 2;
  public static TIPO_AUDIO_KARAOKE = 3;
  public static TIPO_AUDIO_OTROS = 4;

  currentBook: Libro;
  currentPageContents: LibroContenido[];
  currentPageAudios: LibroAudio[];
  public currentAccess: Access[];
  currentBooks: Libro[];
  currentPage: Pagina;
  tiposAudio: TipoAudio[];
  subjectCurrentAccess: BehaviorSubject<Access[]>;
  allMyPageContents: LibroContenido[];
  allMyPageAudios: LibroAudio[];
  allContentPageByEjercicioOpcion: LibroContenido[];
  allContentPageByEjercicioIteractivo: LibroContenido[];
  librosData: Libro[];

  constructor(private http: HttpClient,
              private auhtenticationService: AuthenticationService) {
    this.currentBook = new Libro();
  }

  getMyAccess() {
    const headers = this.auhtenticationService.headers;
    console.log(this.currentAccess);
    if (!this.currentAccess) {
      return this.http.get(`${environment.apiUrl}/api/accesosByUser/`, {headers}).pipe(map(access => {
        console.log('se obtuvieron accesosByUser');
        console.log(access);
        this.currentAccess = access as Access[];
        this.subjectCurrentAccess = new BehaviorSubject<Access[]>(this.currentAccess);
        this.getBooksFromAccess();
        return access as Access[];
      }));
    } else {
      return this.subjectCurrentAccess.asObservable();
    }
  }

  getIdsLibrosByAccess() {
    return this.currentAccess.map(access => access.libroId);
  }

  getTiposAudio() {
    const headers = this.auhtenticationService.headers;
    return this.http.get(`${environment.apiUrl}/api/tipo-audios/`, {headers}).pipe(map(audio => {
      this.tiposAudio = audio as TipoAudio[];
      console.log('Tipos de audio:', this.tiposAudio);
      return audio as TipoAudio[];
    }));
  }

  private getBooksFromAccess() {
    this.currentBooks = this.currentAccess.map(access => {
      return access.libro;
    });
  }

  getBookById(idLibro: number) {
    console.log('los libros actuales son: ', this.currentBooks);
    this.currentBook = this.currentBooks.filter(book => book.id === idLibro)[0];
    return this.currentBook;
  }

  getAllPageContentsByUserAccess(idsLibros: number[]) {
    const headers = this.auhtenticationService.headers;
    console.log('se obtendran los  contenidos de los libros  :, ', idsLibros);
    const requestParams = new HttpParams().set('idsLibros', idsLibros.join(', '));
    return this.http.get<LibroContenido[]>(`${environment.apiUrl}/api/libro-contenidosByIdsLibros/`, {
      params: requestParams,
      headers
    }).pipe(map(data => {
      this.allMyPageContents = data as LibroContenido[];
      console.log('Estos son todos mis contenidos');
      console.log(this.allMyPageContents);
      return this.allMyPageContents;
    }));
  }

  getLibros(){
    const headers = this.auhtenticationService.headers;
    console.log('se obtendran los libros ');
    return this.http.get<Libro[]>(`${environment.apiUrl}/api/libros/`, {
      headers
    }).pipe(map(data => {
      this.librosData = data as Libro[];
      console.log('Estos son todos los libros por Opcion');
      console.log(this.librosData);
      return this.librosData;
    }));
  }

  private getPageContents(idLibro: string) {
    const headers = this.auhtenticationService.headers;
    return this.http.get<LibroContenido[]>(`${environment.apiUrl}/api/libro-contenidosByIdLibro/${idLibro}`, {
      headers
    }).pipe(map(data => {
      this.currentPageContents = data as LibroContenido[];
      console.log('esotos son los contenidos');
      console.log(this.currentPageContents);
    }));
  }

  getAllPageContentsByEjercicioOpcion() {
    const headers = this.auhtenticationService.headers;
    return this.http.get<LibroContenido[]>(`${environment.apiUrl}/api/libro-contenidosByEjercicioOpcion/`, {
      headers
    }).pipe(map(data => {
      this.allContentPageByEjercicioOpcion = data as LibroContenido[];
      console.log('esotos son los contenidos por EjercicioOpcion');
      console.log(this.allContentPageByEjercicioOpcion);
      return this.allContentPageByEjercicioOpcion;
    }));
  }

  getAllPageContentsByEjercicioIteractivo() {
    const headers = this.auhtenticationService.headers;
    return this.http.get<LibroContenido[]>(`${environment.apiUrl}/api/libro-contenidosByEjercicioIteractivo/`, {
      headers
    }).pipe(map(data => {
      this.allContentPageByEjercicioIteractivo = data as LibroContenido[];
      console.log('Estos son los contenidos por EjercicioIteractivo');
      console.log(this.allContentPageByEjercicioIteractivo);
      return this.allContentPageByEjercicioIteractivo;
    }));
  }

  getPageContentsFromLocalData(idLibro: number) {
    console.log('se obtendran contenidos de un libro local:', this.allMyPageContents );
    this.currentPageContents = this.allMyPageContents.filter(pageContent => pageContent.libroId === idLibro);
    console.log('Se cargaron los Conetnidos del libro:', idLibro);
    console.log(this.currentPageContents);
  }

  getAllPageAudiosByAccess(idsLibros: number[]) {
    const headers = this.auhtenticationService.headers;
    const requestParams = new HttpParams().set('idsLibros', idsLibros.join(', '));
    return this.http.get<LibroAudio[]>(`${environment.apiUrl}/api/libro-audiosByIdsLibros/`,
      {
        params: requestParams,
        headers
      })
      .pipe(map(data => {
        this.allMyPageAudios = data as LibroAudio[];
        console.log('Estos son todos mis audios');
        console.log(this.allMyPageAudios);
        return this.allMyPageContents;
      }));
  }

  getPageAudiosFromLocalData(idLibro: number) {
    this.currentPageAudios = this.allMyPageAudios.filter(pageAudio => pageAudio.libroId === idLibro);
    console.log('Se cargaron los Audios del libro:', idLibro);
    console.log(this.currentPageAudios);
  }

  private getPageAudios(idLibro: string) {
    const headers = this.auhtenticationService.headers;
    return this.http.get<LibroAudio[]>(`${environment.apiUrl}/api/libro-audiosByIdLibro/${idLibro}`, {headers}).pipe(map(data => {
      this.currentPageAudios = data as LibroAudio[];
      console.log('esotos son los audios');
      console.log(this.currentPageAudios);
    }));
  }

  getPages(idLibro: number) {
    console.log('se obtendran los contenido y audios de libro: ', idLibro);
    console.log('en GetPages All Contents are:', this.allMyPageContents);
    console.log('en getPAges Al Audios are: ', this.allMyPageAudios);
    this.getBookById(idLibro);
    return forkJoin(
      of(this.getPageContentsFromLocalData(idLibro)),
      of(this.getPageAudiosFromLocalData(idLibro))
     // this.getPageContents(idLibro),
     // this.getPageAudios(idLibro)
    ).pipe();
  }

  getPageContentByNumber(numberPage: number): Pagina {
    const contenido = this.currentPageContents.filter(c => c.numeroPagina === numberPage)[0];
    // tslint:disable-next-line:triple-equals
    const canciones = this.currentPageAudios.filter(a => a.numeroPagina === numberPage && a.tipoAudioId === LibroService.TIPO_AUDIO_CANCION);
    const narrations = this.currentPageAudios
      .filter(n => n.numeroPagina === numberPage && n.tipoAudioId === LibroService.TIPO_AUDIO_NARRACION);
    const karaoke = this.currentPageAudios
      .filter(n => n.numeroPagina === numberPage && n.tipoAudioId === LibroService.TIPO_AUDIO_KARAOKE);
    const otrosAudios = this.currentPageAudios
      .filter(a => a.numeroPagina === numberPage && a.tipoAudioId === LibroService.TIPO_AUDIO_OTROS);

    this.currentPage = new Pagina();
    this.currentPage.contenido = contenido;
    this.currentPage.canciones = canciones;
    this.currentPage.karaokes = karaoke;
    this.currentPage.audios = otrosAudios;
    console.log('estos son los audios:', this.currentPage.audios);
    this.currentPage.narraciones = narrations;
    console.log('esta es la narración:', this.currentPage.narraciones);
    console.log('este es el karaoke:', this.currentPage.karaokes);
    return this.currentPage;
  }

  getContentPageByEjercicioOpcionId(idEjercicioOpcion: number): LibroContenido[] {
    return this.allMyPageContents.filter(pageContent => pageContent.ejercicioOpcionId === idEjercicioOpcion);
  }


  clearData() {
    this.currentBook = undefined;
    this.currentPageContents = [];
    this.currentPageAudios = [];
    this.currentAccess = null;
    this.currentBooks = [];
    this.currentPage = undefined;
    this.tiposAudio = [];
    this.subjectCurrentAccess = undefined;
    this.allMyPageContents = [];
    this.allMyPageAudios = [];
    this.allContentPageByEjercicioOpcion = [];
    this.allContentPageByEjercicioIteractivo = [];
    this.librosData = [];
  }
}
