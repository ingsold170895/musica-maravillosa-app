import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Libro} from "@app/_models/Libro";
import {FormControl} from "@angular/forms";
import {User} from "@app/_models";
import {AulaService} from "@app/_services/aula.service";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";
import {LibroService} from "@app/_services/libro.service";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";


@Component({
  selector: 'app-export-all-students',
  templateUrl: './export-all-students.component.html',
  styleUrls: ['./export-all-students.component.scss', './../../../../css/bootstrap.css', './../../../shared/css/icons-config.css']
})
export class ExportAllStudentsComponent implements OnInit {

  libroSelected: string;
  librosList: string[];
  dateDesde: any;
  dateHasta: any;

  displayedColumns: string[];
  scoresDataSource: scoresStudent[];
  ejerciciosColumnsNames: string[];

  constructor(private location: Location,
              private aulaService: AulaService,
              private libroService: LibroService,
              private tareaEjercicioService: TareaEjerciciosService) {
  }

  ngOnInit() {
    this.buildData_AllScoresOfAllCurrentStudents();
  }

  buildData_AllScoresOfAllCurrentStudents() {
    //Primero teniendo la lista de los estudaintes en este curso, obtener sus calificaciones y promedio, (De todos sus ejercicios)
    this.scoresDataSource  = this.aulaService.currentStudentsLoaded.map<scoresStudent>((student, index) => {
      if (student.usuarioActivo) {
        let tareasEjercicioByStudent = this.tareaEjercicioService.getTareasEjercicioByUserId(student.usuarioId);
        return {
          estudiante: student.usuarioNombre,
          ejercicios: tareasEjercicioByStudent,
          promedio: this.getPromedioOfTareaEjercicios(tareasEjercicioByStudent)
        }
      }
    });
    console.log(this.scoresDataSource);
    this.fillLibrosExistentes();
    this.fillDisplayedColumns();
  }


  buildData_AllScoresOfAllCurrentStudentsByLibro(libro: string) {
    console.log(libro);
    //Primero teniendo la lista de los estudaintes en este curso, obtener sus calificaciones y promedio, (De todos sus ejercicios)
    this.scoresDataSource = [];
    this.scoresDataSource = this.aulaService.currentStudentsLoaded.map<scoresStudent>((student, index) => {
      if (student.usuarioActivo) {
        let tareasEjercicioByStudent = this.tareaEjercicioService.getTareasEjercicioByUserId(student.usuarioId)
                                                                  .filter(tarea => tarea.libro === libro);

        return {
          estudiante: student.usuarioNombre,
          ejercicios: tareasEjercicioByStudent,
          promedio: this.getPromedioOfTareaEjercicios(tareasEjercicioByStudent)
        }
      }
    });
    console.log(this.scoresDataSource);
    this.fillDisplayedColumns();
  }

  fillLibrosExistentes() {
    this.librosList = [];
    this.scoresDataSource.map(scoreData => {
      let libros = scoreData.ejercicios.map(tareaEjercicio => {
        this.librosList.push(tareaEjercicio.libro);
      });
    });
    this.librosList = this.removeDuplicateItemsInLibros(this.librosList);
  }

  getPromedioOfTareaEjercicios(tareasEjercicio: TareaEjercicio[]) {
    let sumaTotales = tareasEjercicio.reduce((acc, tarea) => acc + tarea.puntajeTotal, 0);
    return sumaTotales / tareasEjercicio.length;
  }

  fillDisplayedColumns() {
    this.displayedColumns = ['estudiante'];
    this.ejerciciosColumnsNames = [];

    this.scoresDataSource.map(scoreData => {
      scoreData.ejercicios.map(tareaEjercicio => {
        this.displayedColumns.push("Pag-"+tareaEjercicio.pagina+" "+tareaEjercicio.tipoEjercicioNombre);
        this.ejerciciosColumnsNames.push("Pag-"+tareaEjercicio.pagina+" "+tareaEjercicio.tipoEjercicioNombre);
      });
    });

    this.displayedColumns.push('promedio');

    this.displayedColumns = this.removeDuplicateItemsInLibros(this.displayedColumns);
    this.ejerciciosColumnsNames = this.removeDuplicateItemsInLibros(this.ejerciciosColumnsNames);
  }


  goBackPage() {
    this.location.back();
  }

  searchByLibro(libroSelected: string) {
      this.buildData_AllScoresOfAllCurrentStudentsByLibro(libroSelected);
  }

  removeDuplicateItemsInLibros(duplicates: any[]): any[] {
    if(!duplicates) return;
    let cleanData = [];
    duplicates.map(obj => {
      let existItem = cleanData.filter(item => item === obj);
      if (existItem.length === 0) {
        cleanData.push(obj);
      } else {
        console.log('ya existe en clean data', obj);
      }
    });
    return cleanData;
  }
}

class scoresStudent {
  estudiante: string;
  ejercicios: TareaEjercicio[];
  promedio: number;
}
