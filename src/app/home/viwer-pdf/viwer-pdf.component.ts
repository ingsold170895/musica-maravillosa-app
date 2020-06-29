import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {AudioService} from '@app/_services/audio.service';
import {StreamState} from '@app/_models/stream-state';
//import {Track} from 'ngx-audio-player';
import {Pagina} from '@app/_models/Pagina';
import {LibroService} from '@app/_services/libro.service';
import {LibroContenido} from '@app/_models/LibroContenido';
import {EjercicioOpcionService} from '@app/_services/ejercicioOpcion.service';
import {EjercicioOpcion} from '@app/_models/EjercicioOpcion';
import {EjercicioOpcionPregunta} from '@app/_models/EjercicioOpcionPregunta';
import {ModalService} from '@app/_modals';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthenticationService} from "@app/_services";
import {MatSliderChange} from "@angular/material/slider";
import {EjercicioOpcionRespuesta} from "@app/_models/EjercicioOpcionRespuesta";
import {of} from "rxjs";
import html2canvas from 'html2canvas';
import {BookComponent} from "@app/home/book/book.component";
import {Constants} from "@app/Constants/Constants";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {DatePipe} from "@angular/common";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import * as printJS from 'print-js'
import {sha256} from "js-sha256";
import {Track} from "@app/ngx-audio-player/model/track.model";
import {AudioPlayerService} from "@app/ngx-audio-player/service/audio-player-service/audio-player.service";


declare function prepareButtonPrintPentagrama(): any;

@Component({
  selector: 'app-viwer-pdf',
  templateUrl: './viwer-pdf.component.html',
  styleUrls: ['./viwer-pdf.component.scss', './../../shared/css/icons-config.css', './../../../css/bootstrap.css']
})
export class ViwerPdfComponent implements OnInit, AfterViewInit {
  msbapTitle = 'Audio Title';
  msbapAudioUrl = '';
  msaapPageSizeOptions = [3];
  msbapDisplayTitle = true;
  msbapDisplayVolumeControls = true;
  autoPlay: boolean = false;

  isPlayingNarrador = false;
  narradorPrimeraVez = true;
  isPlayingKaraoke = false;
  karaokePrimeraVez = true;
  static PLAYER_NARRADOR = 1;
  static PLAYER_KARAOKE = 2;
  isPrintPentagramaOpen = false;

  sourcePDF: string;
  tituloLibro: string;
  tituloSha256: string;
  animacion_opcionMultiple: string = '';

  page: Pagina;
  narracionSource: string;
  karaokeSource: string;
  sourcePentagramaImprimir: string;
  tituloPentagrama: string;
  contentPage: LibroContenido;
  maxTimeNarrador: number;
  trackListAudios: Track[];
  trackListCanciones: Track[];
  trackListKaraokes: Track[];
  trackListNarraciones: Track[];


  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapDisplayVolumeControls = false;

// Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Guitarra',
      link: 'assets/audios/p.17 Figuras rítmicas ej.1.mp3'
    },
    {
      title: 'Intervalo 2',
      link: 'assets/audios/p. 17 ejemplo 2_.mp3'
    },
    {
      title: 'Narrador',
      link: 'assets/audios/Best Friends.mp3'
    },
  ];

  questionsForm: FormGroup;
  resultadoEjercicioPreguntas: number;
  idModalEjercicios: string = 'idModalEjercicios';
  idModalLoading: string = 'idModalLoading';
  idModalResultado: string = 'idModalResultado';
  idModalDetails: string = 'idModalDetails';
  idModalPrintPentagrama: string = 'idModalPrintPentagrama';

  audiosNumberPages: any[] = [
    {numberPage: 2, link: 'assets/audios/musica.mp3', title: 'Audio 1 - Page 2'},
    {numberPage: 5, link: 'assets/audios/musica2.wav', title: 'Audio 2 - Page 5'},
    {numberPage: 10, link: 'assets/audios/Best Friends.mp3', title: 'Audio 3 - Page 10'},
    {numberPage: 16, link: 'assets/audios/musica.mp3', title: 'Audio 4 - Page 16'},
  ];


  thereIsAudio: boolean;
  state: StreamState;
  enableHomeworks: boolean;
  enablePrintPage: boolean;
  enableVideoPage: boolean;
  enableEjercicioOpcionPage: boolean;
  enableEjercicioItercativoPAge: boolean;
  enablePrintPentagrama: boolean;
  enableKaraoke: boolean;
  enableCanciones: boolean;
  enableReconocimientoAuditivo: boolean;
  enableNarrador: boolean;
  isCurrentEjercicioOpcionResuelto: boolean;

  sourceVideo: string;
  idPentagramaImprimir: number;
  idEjercicioInteractivo: number;
  idEjercicioOpcionPage: number;
  currentEjercicioOpcion: EjercicioOpcion;
  currentEjercicioPreguntas: EjercicioOpcionPregunta[];

  constructor(public audioService: AudioService,
              public libroService: LibroService,
              private modalService: ModalService,
              private authService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder,
              private audioPlayerService: AudioPlayerService,
              private tareaEjercicioService: TareaEjerciciosService,
              public ejercicioOpcionService: EjercicioOpcionService) {
    // listen to stream state
    this.audioService.getState()
      .subscribe(state => {
        this.state = state;
      });
  }

  ngOnInit() {
    this.thereIsAudio = false;
    //convert titulo con sha256
    this.tituloLibro = this.libroService.currentBook.titulo;
    this.tituloSha256 = sha256(this.tituloLibro);
    console.log(this.tituloSha256);
    const pathPdf = './../assets/pen5/li6/' + this.tituloSha256;
    this.sourcePDF = pathPdf.toString();
    this.enableHomeworks = this.libroService.currentAccess
      .filter(access => access.libroId = this.libroService.currentBook.id)[0].cuadernoTrabajo;
    console.log('homeworks: ', this.enableHomeworks);
    this.pageChanged(1);
    this.modalService.add(this.idModalLoading);
  }

  goBackToHomePage(){
    this.router.navigate(['/music/home/']);
  }

  openDetailsModal() {
    this.modalService.open(this.idModalDetails);
  }

  closeLoadingModal() {
    this.modalService.close(this.idModalLoading);
  }

  pageChanged(currentPageNumber) {

    console.log('Cargando datos de la pagina: ' + currentPageNumber);
    this.clearPage();
    this.chargeAllContentsPage(currentPageNumber); // CARGAR CONTENIDO DE PAGINA, AUDIOS Y NARACCIÓN y KARAOKE

    console.log('homeworks: ', this.enableHomeworks);
    if (this.enableHomeworks) { // VALIDAR SI TIENE PERMISOS PARA CUADERNO DE TRABAJO
      if (this.contentPage.imprimir !== null && this.contentPage.imprimir !== undefined) {
        this.enablePrintPage = this.contentPage.imprimir; // PERMITIR IMPRIMIR PAGINA
      }
      if (this.contentPage.archivoVideo) { // PERMITIR MOSTRAR VIDEO
        this.enableVideoPage = true;
        this.animacion_opcionMultiple = 'Animación';
        this.sourceVideo = this.contentPage.archivoVideo;
      }
      if (this.contentPage.pentagramaId) { // PERMITIR IMPRIMIR PENTAGRAMA
        this.enablePrintPentagrama = true;
        this.idPentagramaImprimir = this.contentPage.pentagramaId;
        const namePdf = (this.idPentagramaImprimir === Constants.PENTAGRAMA_BIGRAMA_ID) ? Constants.PENTAGRAMA_BIGRAMA_NOMBRE :
          (this.idPentagramaImprimir === Constants.PENTAGRAMA_NORMAL_ID) ? Constants.PENTAGRAMA_NORMAL_NOMBRE :
            (this.idPentagramaImprimir === Constants.PENTAGRAMA_NORMAL_2_ID) ? Constants.PENTAGRAMA_NORMAL_NOMBRE_2: 'PENTAGRAMA';
        this.sourcePentagramaImprimir = './../dist/assets/images/Pentagramas/' + namePdf + '.jpg'
        this.tituloPentagrama = this.contentPage.tituloPentagrama;
      }

      if (this.contentPage.ejercicioInteractivoId) { // PERMITIR HACER EJERCICIO INTERACTIVO
        this.enableEjercicioItercativoPAge = true;
        this.idEjercicioInteractivo = this.contentPage.ejercicioInteractivoId;
      }
      console.log(this.contentPage.ejercicioOpcionId);
      if (this.contentPage.ejercicioOpcionId) { // PERMITIR HACER EJERCICIO OPCION
        this.idEjercicioOpcionPage = this.contentPage.ejercicioOpcionId;
        this.animacion_opcionMultiple = 'Ejercicio';
        this.currentEjercicioOpcion = this.ejercicioOpcionService.getEjericioOpcionById(this.idEjercicioOpcionPage);
        this.currentEjercicioPreguntas = this.ejercicioOpcionService.currentEjercicioOpcionPreguntas;
        this.fillRespuestasIntoPreguntas();
        this.createFormToQuestions();
        console.log(this.tareaEjercicioService.allTareasEjercicio);
        this.isCurrentEjercicioOpcionResuelto = this.tareaEjercicioService.getTareasEjercicioByUserId(this.authService.currentUserValue.id)
          .filter(tarea => tarea.usuarioId === this.authService.currentUserValue.id &&
            tarea.pagina === this.contentPage.numeroPagina &&
            tarea.libro === this.libroService.currentBook.titulo).length > 0;
        this.enableEjercicioOpcionPage = true;
      }
      console.log(this.enableEjercicioOpcionPage);
    }
  }

  clearPage() {
    this.autoPlay = false;
    this.narradorPrimeraVez = true;
    this.karaokePrimeraVez = true;
    this.sourcePentagramaImprimir = '';
    this.tituloPentagrama = '';
    this.contentPage = new LibroContenido();
    this.narracionSource = '';
    this.msaapPlaylist = [];
    this.isPlayingNarrador = false;
    this.isPlayingKaraoke = false;
    this.enablePrintPage = false;
    this.enableVideoPage = false;
    this.enableEjercicioOpcionPage = false;
    this.enableEjercicioItercativoPAge = false;
    this.enablePrintPentagrama = false;
    this.narracionSource = '';
    this.audioService.stop();
    this.enableNarrador = false;
    this.enableKaraoke = false;
    this.enableCanciones = false;
    this.enableReconocimientoAuditivo = false;
    this.trackListCanciones = [];
    this.trackListKaraokes = [];
    this.trackListAudios = [];
    this.trackListNarraciones = [];
  }

  fillRespuestasIntoPreguntas() {
    this.currentEjercicioPreguntas.map(pregunta => {
      pregunta.respuestas = this.ejercicioOpcionService.getRespuestasByPreguntaId(pregunta.id);
      console.log(pregunta.respuestas);
    });
    console.log(this.currentEjercicioPreguntas);

  }


  createFormToQuestions() {
    const questionsGroup: FormGroup = new FormGroup({});
    // tslint:disable-next-line:forin
    for (const pregunta of this.currentEjercicioPreguntas) {
      const control: FormControl = new FormControl('', Validators.required);
      questionsGroup.addControl(pregunta.id.toString(), control);
    }
    this.questionsForm = questionsGroup;
    console.log(this.questionsForm);
  }

  sendRespuestas() {
    this.modalService.close(this.idModalEjercicios);
    this.modalService.open(this.idModalLoading);
    const respuestas: EjercicioOpcionRespuesta[] =
      this.currentEjercicioPreguntas.map(pregunta => {
        return this.questionsForm.controls[pregunta.id].value;
      });
    console.log('res:', respuestas);
    let puntajePorPreguntaCorrecta = 100 / respuestas.length;
    const respuestasCorrectas = this.ejercicioOpcionService.getRespuestasCoreectasByEjercicio();
    const aciertos = respuestas.filter(respuesta => respuestasCorrectas.includes(respuesta));
    respuestas.map(r => {
      if (r.correcta) r.puntajePregunta = puntajePorPreguntaCorrecta;
      else r.puntajePregunta = 0;
    });
    this.resultadoEjercicioPreguntas = (aciertos.length / respuestasCorrectas.length) * 100;

    let tarea: TareaEjercicio = this.buildTareaEjercicio(
      this.tareaEjercicioService.tipoEjercicios.filter(t => t.id === Constants.TIPO_EJERCICIO_OPCION_MULTIPLE_ID)[0].id,
      this.resultadoEjercicioPreguntas);
    // let tareaEjercicioRespuestas: TareaEjercicioOprecionRespuesta =
    console.log('Tarea creada: ', tarea);
    this.tareaEjercicioService.saveTareaEjercicio(tarea).subscribe(tareaSaved => {
      tarea = this.tareaEjercicioService.tareaEjercicioSaved;
      let tareasEjercicioRespuestas = this.buildrespuestas(respuestas, tarea.id);
      this.tareaEjercicioService.saveTareaEjercicioRespuestas(tareasEjercicioRespuestas).subscribe(repsuestasSaved => {
        console.log(repsuestasSaved);
        this.tareaEjercicioService.getAllTareaEjercioOpcionRespuestaByStudent().subscribe(response => {
          console.log(response);
          this.tareaEjercicioService.retrieveTareasEjercioFromTareasEjercicioRespuestas();
          this.isCurrentEjercicioOpcionResuelto = true;
          this.modalService.close(this.idModalLoading);
          this.modalService.open(this.idModalResultado);
        });
      });
    });

  }

  buildTareaEjercicio(idTipoEjercicio: number, puntajeTotal: number): TareaEjercicio {
    let tarea: TareaEjercicio = new TareaEjercicio();
    tarea.tipoEjercicioId = idTipoEjercicio;
    tarea.fecha = new Date(Date.now());
    tarea.usuarioId = this.authService.currentUserValue.id;
    tarea.puntajeTotal = puntajeTotal;
    return tarea;
  }

  buildrespuestas(respuestasForm: EjercicioOpcionRespuesta[], idTareaEjercicio: number) {
    console.log(respuestasForm);
    let respuestas: TareaEjercicioOprecionRespuesta[] = respuestasForm.map(respuestaF => {
      return {
        nroRespuesta: Number.parseFloat(respuestaF.nroRespuesta),
        puntaje: respuestaF.puntajePregunta,
        tareaEjercicioId: idTareaEjercicio,
        respuesta: respuestaF.respuesta,
        ejercicioOpcionPreguntaId: respuestaF.ejercicioOpcionPreguntaId
      };
    });
    return respuestas;
  }

  showPentagrama() {
    this.isPrintPentagramaOpen = true;
  }

  printPentagrama() {
    printJS('divPrintPentagrama', 'html');
    this.isPrintPentagramaOpen = false;
  }

  printCurrentPage() {
    printJS('viewerContainer', 'html');
  }

  print(doc) {
    var objFra = document.createElement('iframe');   // Create an IFrame.
    objFra.style.visibility = "hidden";    // Hide the frame.
    objFra.src = doc;                      // Set source.
    document.body.appendChild(objFra);  // Add the frame to the web page.
    objFra.contentWindow.focus();       // Set focus.
    objFra.contentWindow.print();      // Print it.
  }

  setSizes() {
    this.ngAfterViewInit();
  }

  cleanSrcAudioPLayer() {
    const audioPlayer = document.getElementById('audio-player');
    const audio = audioPlayer.getElementsByTagName('audio')[0];
    audio.setAttribute('src', '');
  }

  ngAfterViewInit() { // CAMBIO DEL DISEÑO DE EL MULTIPLAYER
    const div = document.getElementById('viewerContainer');
    div.style.overflowY = 'hidden';
    div.style.pointerEvents = 'none';
    const audioPlayer = document.getElementById('audio-player');
    const svg = audioPlayer.getElementsByTagName('svg');
    const buttons = audioPlayer.getElementsByTagName('button');

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < svg.length; i++) {
      svg[i].style.display = 'block';
      svg[i].style.maxHeight = '20px';
      svg[i].style.maxWidth = '20px';
      // buttons[i].style.maxHeight = '30px';
      buttons[i].style.maxWidth = '40px';
    }

    // Get mat-cards of audioPlayer para encontrar el elemento del cual eliminar la clase

    const matCardsAudioPlayer = audioPlayer.getElementsByTagName('mat-card');
    const cardButtonsPlayer = matCardsAudioPlayer[0];

    if (cardButtonsPlayer.classList.contains('justify-content-center')) {
      cardButtonsPlayer.classList.remove('justify-content-center');
      cardButtonsPlayer.classList.remove('d-flex');
      cardButtonsPlayer.classList.add('text-center');
    }
    const tablePlayList = audioPlayer.getElementsByTagName('table');
    /*if (tablePlayList[0].childNodes[0].nodeName === 'THEAD') {
      tablePlayList[0].removeChild(tablePlayList[0].childNodes[0]);
    }

     */

    //oculatr mat-paginator-page-size
    const divTextItemsContainer = audioPlayer.getElementsByClassName('mat-paginator-page-size');
    // @ts-ignore
    divTextItemsContainer[0].style.visibility = 'hidden';
    // set text 'items per page'
    const divTextItems = audioPlayer.getElementsByClassName('mat-paginator-page-size-label');
    divTextItems[0].textContent = 'Audios por Página:';
    // Eliminar texto #X of #X
    const numberOfItemsText = audioPlayer.getElementsByClassName('mat-paginator-range-label');
    numberOfItemsText[0].remove();

    // center Text Button to change Page
    const paginatorTexts = audioPlayer.getElementsByClassName('mat-paginator-range-actions');
    paginatorTexts[0].classList.add('text-center');

    // set text of 'Play List'
   // const playListText = audioPlayer.getElementsByClassName('mat-content');
   // playListText[0].textContent = 'Lista de Audios';

    // set min-width o mat-slider
    const matSlider = audioPlayer.getElementsByTagName('mat-slider');
    // @ts-ignore
    matSlider[0].style.minWidth = '100px';
    // @ts-ignore
    matSlider[0].style.Width = '40%';

    // set With of col container of slider
    const colContainerSlider = audioPlayer.getElementsByClassName('col');
    // @ts-ignore
    // colContainerSlider[0].style.width = '100px';
    // @ts-ignore
    // colContainerSlider[0].style.marginLeft = '50px';

    // set header width
    const headerMediaPlayer = audioPlayer.getElementsByClassName('ngx-advanced-audio-player');
    // @ts-ignore
    headerMediaPlayer[0].style.minWidth = '125px';
    // @ts-ignore
    headerMediaPlayer[0].style.textAlign = 'center';

    const buttonNext = audioPlayer.getElementsByClassName('skip-next');
    // @ts-ignore
    buttonNext[0].style.borderRight = '0px';
  }

  playStream(url) {
    this.audioService.playStream(url)
      .subscribe(events => {
        this.audioService.getState().subscribe(state => {
          this.state = state;
        });
      });
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  /* getCurrentTimeNarrador():number {
     return this.audioService.getState().subscribe(audio => audio.currentTime);
   }

   */

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }


  iniciarNarrador() {
    if (this.isPlayingKaraoke) {
      this.stop();
      this.isPlayingKaraoke = false;
      this.karaokePrimeraVez = true;
    } else {
      if (this.narradorPrimeraVez) {
        this.playStream(this.narracionSource);
        this.narradorPrimeraVez = false;
      } else {
        if (!this.isPlayingNarrador) {
          this.play();
        } else {
          this.pause();
        }
      }
      this.isPlayingNarrador = !this.isPlayingNarrador;
    }
  }

  iniciarKaraoke() {
    if (this.isPlayingNarrador) {
      this.stop();
      this.isPlayingNarrador = false;
      this.narradorPrimeraVez = true;
    } else {
      if (this.karaokePrimeraVez) {
        this.playStream(this.karaokeSource);
        this.karaokePrimeraVez = false;
      } else {
        if (!this.isPlayingKaraoke) {
          this.play();
        } else {
          this.pause();
        }
      }
      this.isPlayingKaraoke = !this.isPlayingKaraoke;
    }
  }


  chargeAllContentsPage(numberPage: number) { // Se obtiene los  Audios, la Narracion y el Contenido(LibroContenido)
    this.page = this.libroService.getPageContentByNumber(numberPage);
    if (this.page.narraciones) {
      // this was to custom media Player
      // this.narracionSource = `assets/audios/${this.libroService.currentBook.titulo}/narrador/${this.page.narracion.nombreArchivo}`;
      if (this.page.narraciones.length > 0) {
        this.trackListNarraciones = this.page.narraciones.map((audio, index) => {
          return {
            title: 'Narración ' + (index + 1),
            link: `assets/audios/${this.libroService.currentBook.titulo}/narrador/${audio.nombreArchivo}`
          };
        });
        this.enableNarrador = true;
      }
    }
    if (this.page.audios) {
      if (this.page.audios.length > 0) {
        this.trackListAudios = this.page.audios.map((audio) => {
          return {
            title: audio.titulo.replace('.mp3', ''),
            link: `assets/audios/${this.libroService.currentBook.titulo}/audios/${audio.nombreArchivo}`
          };
        });
        this.enableReconocimientoAuditivo = true;
      }
    }
    if (this.page.canciones) {
      if (this.page.canciones.length > 0) {
        this.trackListCanciones = this.page.canciones.map((audio) => {
          return {
            title: audio.titulo.replace('.mp3', '').substring(3),
            link: `assets/audios/${this.libroService.currentBook.titulo}/audios/${audio.nombreArchivo}`
          };
        });
        this.enableCanciones = true;
      }
    }
    if (this.page.karaokes) {
      if (this.page.karaokes.length > 0) {
        this.trackListKaraokes = this.page.karaokes.map((audio) => {
          console.log('karaoke cargado: ', audio);
          return {
            title: audio.titulo.replace('.mp3', '').substring(3) + ' Karaoke',
            link: `assets/audios/${this.libroService.currentBook.titulo}/karaoke/${audio.nombreArchivo}`
          };
        });
        this.enableKaraoke = true;
      }
    }
    if (this.page.contenido) {
      this.contentPage = this.page.contenido;
    }
  }

  cargarNarradores() {
    this.autoPlay = true;
    this.msaapPlaylist = this.trackListNarraciones;
  }

  cargarCanciones() {
    this.autoPlay = true;
    this.msaapPlaylist = this.trackListCanciones;
  }

  cargarKaraokes() {
    this.autoPlay = true;
    this.msaapPlaylist = this.trackListKaraokes;
  }

  cargarAudios() {
    this.autoPlay = true;
    this.msaapPlaylist = this.trackListAudios;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey === true &&
      (event.which.toString() === '61' ||
        event.which.toString() === '107' ||
        event.which.toString() === '173' ||
        event.which.toString() === '109' ||
        event.which.toString() === '187' ||
        event.which.toString() === '189')) {
      event.preventDefault();
      event.stopPropagation();
      // 107 Num Key  +
      // 109 Num Key  -
      // 173 Min Key  hyphen/underscor Hey
      // 61 Plus key  +/=
    }
  }

  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {
    if (event.ctrlKey === true) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  openModalEjercicioOpcion() {
    this.modalService.open(this.idModalEjercicios);

  }

}
