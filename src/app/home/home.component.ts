import {Component, OnInit} from '@angular/core';
import {BookCard} from '../shared/models/bookCard';
import {Libro} from '@app/_models/Libro';
import {LibroService} from '@app/_services/libro.service';
import {AuthenticationService} from '@app/_services';
import {EjercicioOpcionService} from "@app/_services/ejercicioOpcion.service";
import {forkJoin, pipe} from "rxjs";
import {TipoAudio} from "@app/_models/TipoAudio";
import {ModalService} from "@app/_modals";
import {AulaService} from "@app/_services/aula.service";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";
import {concatMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './.././shared/css/icons-config.css']
})
export class HomeComponent implements OnInit {
  booksCards: BookCard[];
  loadingData: boolean = false;
  librosCargados: boolean = false;
  errorCargarLibroContenidos: boolean = false;
  errorCargarLibroAudios: boolean = false;
  allDataLoaded: boolean;

  constructor(private libroService: LibroService,
              private authenticationService: AuthenticationService,
              private modalService: ModalService,
              private ejercicioOpcionService: EjercicioOpcionService,
              private tareaEjercicioService: TareaEjerciciosService,
              private aulaService: AulaService) {
  }

  ngOnInit() {
    this.loadingData = true;
    this.cargarContenidos();
    this.verifyDataLoaded();
  }

  cargarContenidos() {
    this.libroService.getMyAccess().pipe().subscribe(accesses => {
      console.log("acesos currentes:", accesses);
      this.booksCards = accesses.map(access => {
        console.log('Traer los libros');
        console.log(access);
        if (access.activo) {
          return {
            title: access.libro.titulo,
            idLibro: access.libro.id,
            by: access.libro.autor,
            description: access.libro.descripcion,
            urlImage: `assets/images/portadas/${access.libro.titulo}.png`,
            showGuide: access.guiaDidactica && this.authenticationService.isTeacher,
            showFonoteca: this.authenticationService.isTeacher
          };
        }
      });
    }, () => {
      console.log('Hubo un Error al cargar los Libros');
    }, () => {
      this.loadingData = false;
      console.log('ids de libros: ', this.libroService.getIdsLibrosByAccess());
      if (this.libroService.getIdsLibrosByAccess()) {
        if (this.libroService.getIdsLibrosByAccess().length > 0) {
          this.libroService.getAllPageContentsByUserAccess(this.libroService.getIdsLibrosByAccess()).subscribe(result => {
            console.log(result);
            this.librosCargados = true;
            this.authenticationService.pageContentsByUserAccesDataLoaded = true;
            this.verifyDataLoaded();
            console.log(this.allDataLoaded);
          }, err => {
            console.log(err);
            this.errorCargarLibroContenidos = true;
          });
          this.libroService.getAllPageAudiosByAccess(this.libroService.getIdsLibrosByAccess()).subscribe(result => {
            console.log(result);
            this.authenticationService.pageAudiosByUserAccesDataLoaded = true;
            this.verifyDataLoaded();
            console.log(this.allDataLoaded);
          }, err => {
            console.log(err);
            this.errorCargarLibroAudios = true;
          });
        } else {
          this.authenticationService.pageContentsByUserAccesDataLoaded = true;
          this.authenticationService.pageAudiosByUserAccesDataLoaded = true;
          this.verifyDataLoaded();
          console.log(this.allDataLoaded);
          console.log(this.allDataLoaded);
        }
      }
    });
    if (!this.ejercicioOpcionService.ejerciciosLoaded) {
      // CARGAR TODOS LOS EJERCICIOS DE OPCION MULTIPLE PARA LOS LIBROS
      this.ejercicioOpcionService.cargarEjerciciosFromBD().subscribe(data => {
        console.log('esto respondio el servicio de ejercicios: ', data);
        this.ejercicioOpcionService.ejerciciosLoaded = true;
        this.authenticationService.ejerciciosOpcionDataLoaded = true;
        this.verifyDataLoaded();
        console.log(this.allDataLoaded); //2
      }, (err) => console.log('Este es el error del servicio de ejercicios: ', err));

      this.libroService.getTiposAudio().subscribe(tipoAudio => {
        this.libroService.tiposAudio = tipoAudio as TipoAudio[];
      });


    } else {
      this.loadingData = false;
    }

    //CARGAR CONTENIDO DEL LIBRO DE LOS EJERCICIOS OPCION E ITERACTIVO

    if (!this.libroService.allContentPageByEjercicioOpcion) {
      this.libroService.getAllPageContentsByEjercicioOpcion().subscribe(contents => {
        console.log('Contenidos Por EjercicioOpcion cargados');
        this.authenticationService.contentPageEjercicioOpcionDataLoaded = true;
        this.verifyDataLoaded();
        console.log(this.allDataLoaded); //1
      });
      this.libroService.getAllPageContentsByEjercicioIteractivo().subscribe(contents => {
        console.log('Contenidos Por EjercicioIteractivo Pagina cargados');
        this.authenticationService.contentPageEjercicioInteractivoDataLoaded = true;
        this.verifyDataLoaded();
        console.log(this.allDataLoaded);//3
      });
    }

    // CARGAR LAS AULAS DEL PROFESOR
    console.log(this.authenticationService.isTeacher);
    if (this.authenticationService.isTeacher) {
      console.log(this.aulaService.isAulasTeacherLoaded);
      if (!this.aulaService.isAulasTeacherLoaded) {
        this.aulaService.getAllMyClassrooms().subscribe(aulas => {
            console.log(aulas);
            this.aulaService.getAllMyUsuarioAulas().subscribe(usuarioAulas => {
              console.log(this.aulaService.myStudents);
              this.authenticationService.usuariosAulaTeacherDataLoaded = true;
              this.verifyDataLoaded();
              console.log(this.allDataLoaded);//6
            });
          },
          err => {
            console.log(err)
          }
        );

      }
      this.tareaEjercicioService.getAllTareaEjercioOpcionRespuestaByTeacher().subscribe(tareas => {
        this.tareaEjercicioService.getTipoEjercicios().subscribe(tiposE => {
          console.log('Tipos obtenidos:', tiposE);
          this.tareaEjercicioService.retrieveTareasEjercioFromTareasEjercicioRespuestas();
          console.log('las tareas de todos:', this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta);
          this.authenticationService.tareasTeacherDataLoaded = true;
          this.verifyDataLoaded();
          console.log(this.allDataLoaded);//5
        });
       });
    } else {
      if (!this.authenticationService.isTeacher) {
        this.aulaService.getMyClassrom().subscribe(usuarioAula => {
          console.log(this.aulaService.myAulaStudent);
          if (usuarioAula)
            this.aulaService.getMyTeacherUserData(usuarioAula.aulaUsuarioCreacionId).subscribe(teacher => {
              this.aulaService.myStudentTeacher = teacher;
            });
        }, err => {
          console.log('Este usuarui no tiene un aula', err);
        });
        this.tareaEjercicioService.getTipoEjercicios().subscribe(tiposE => {
          console.log('Tipos obtenidos:', tiposE);
        });
        if(!this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta)
        this.tareaEjercicioService.getAllTareaEjercioOpcionRespuestaByStudent().subscribe(tareas => {
          this.tareaEjercicioService.getTipoEjercicios().subscribe(tiposE => {
            console.log('Tipos obtenidos:', tiposE);
            this.tareaEjercicioService.retrieveTareasEjercioFromTareasEjercicioRespuestas();
            console.log('las tareas de este estudiante son:', this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta);
            this.authenticationService.tareasStudentDataLoaded = true;
            this.verifyDataLoaded();
            console.log(this.allDataLoaded);
          });
        });
      }
    }
    //CARGAR LIBROS
    if (!this.libroService.librosData) {
      this.libroService.getLibros().subscribe(libros => {
        console.log(libros);
        this.authenticationService.librosDataLoaded = true;
        this.verifyDataLoaded();
        console.log(this.allDataLoaded); //4
      });
    }
  }

  verifyDataLoaded() {
    this.allDataLoaded =
      this.authenticationService.contentPageEjercicioInteractivoDataLoaded && //v
      this.authenticationService.contentPageEjercicioOpcionDataLoaded && //v
      this.authenticationService.pageContentsByUserAccesDataLoaded &&
      this.authenticationService.pageAudiosByUserAccesDataLoaded &&
      this.authenticationService.librosDataLoaded &&  //v
      this.authenticationService.ejerciciosOpcionDataLoaded && //v
      (this.authenticationService.tareasStudentDataLoaded ||
        (this.authenticationService.tareasTeacherDataLoaded && //v
          this.authenticationService.usuariosAulaTeacherDataLoaded));  //v
  }

  resetDataLoadedVerify() {
    this.authenticationService.contentPageEjercicioInteractivoDataLoaded = false;
    this.authenticationService.contentPageEjercicioOpcionDataLoaded = false;
    this.authenticationService.pageContentsByUserAccesDataLoaded = false;
    this.authenticationService.pageAudiosByUserAccesDataLoaded = false;
    this.authenticationService.librosDataLoaded = false;
    this.authenticationService.ejerciciosOpcionDataLoaded = false;
    this.authenticationService.tareasStudentDataLoaded = false;
    this.authenticationService.tareasTeacherDataLoaded = false;
    this.authenticationService.usuariosAulaTeacherDataLoaded = false;
  }
  recargarContenidos() {
    this.resetDataLoadedVerify();
    this.aulaService.myAulaStudent = null;
    this.libroService.currentAccess = null;
    this.ejercicioOpcionService.ejerciciosLoaded = false;
    this.aulaService.isAulasTeacherLoaded = false;
    this.libroService.librosData = null;
    this.tareaEjercicioService.tipoEjercicios = null;
    this.libroService.allContentPageByEjercicioOpcion = null;
    this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta = null;
    this.cargarContenidos();
  }

}
