import {Component, OnInit} from '@angular/core';
import {AulaService} from "@app/_services/aula.service";
import {UsuarioAula} from "@app/_models/UsuarioAula";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {ModalService} from "@app/_modals";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";

@Component({
  selector: 'app-classroom-data',
  templateUrl: './classroom-data.component.html',
  styleUrls: ['./classroom-data.component.scss', './../../../css/bootstrap.css', './../../shared/css/icons-config.css']
})
export class ClassroomDataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'delete'];
  studentsDataSource: studentItem[];
  currentStudent: UsuarioAula;
  studentTareasDataSource: TareaEjercicio[];
  displayedTareasColumns: string[] = ['fecha', 'libro', 'tema', 'pagina', 'tipoEjercicioNombre', 'puntajeTotal'];
  tareaDetailDataSource: TareaEjercicioOprecionRespuesta[];
  displayedrespuestasColumns: string[] = ['nroRespuesta','ejercicioOpcionPreguntaEnunciado','respuesta','puntaje'];
  idRespuestasModal = 'idRespuestasModal';
  errorDeleteStudent: string;
  idConfirmationDialogDeleteStudent: string = 'idModalDeleteStudent';

  constructor(private aulaService: AulaService,
              private modalService: ModalService,
              private tareaEjercicioService: TareaEjerciciosService) {
  }

  ngOnInit() {
    this.fillStudentsList();
  }

  fillStudentsList() {
    this.studentsDataSource = this.aulaService.currentStudentsLoaded.map<studentItem>((student, index) => {
      if (student.usuarioActivo)
        return {position: index + 1, name: student.usuarioNombre, idUser: student.usuarioId}
    });
  }

  studentSelected(student: any) {
    console.log('eligio a :', student);
    this.currentStudent = this.aulaService.getStudentByUserId(student.idUser);
    this.studentTareasDataSource = this.tareaEjercicioService.getTareasEjercicioByUserId(student.idUser);
  }

  tareaSelected(tarea) {
    console.log(tarea);
    this.tareaDetailDataSource = this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta.filter(tareaRes => tareaRes.tareaEjercicioId === tarea.id);
    this.modalService.open(this.idRespuestasModal);
  }

  openModalConfirmation(student) {
    this.currentStudent = this.aulaService.getStudentByUserId(student.idUser);
    this.modalService.open(this.idConfirmationDialogDeleteStudent);
  }

  closeModalConfirmation() {
    this.modalService.close(this.idConfirmationDialogDeleteStudent);
  }


  deleteStudent() {
    this.aulaService.deleteUsuarioAula(this.currentStudent.id).subscribe(response => {
      this.aulaService.getAllMyUsuarioAulas().subscribe(students => {
        this.aulaService.loadUsuarioAulasByAulaId(this.aulaService.currentAulaLoaded);
        this.fillStudentsList();
      });
      this.errorDeleteStudent = '';
    },error => this.errorDeleteStudent = 'No se pudo borrar el estudiante');
  }
}

class studentItem {
  position: number;
  name: string;
  idUser: number;
}

