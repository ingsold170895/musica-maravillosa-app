import {Component, OnInit} from '@angular/core';
import {AulaService} from "@app/_services/aula.service";
import {UsuarioAula} from "@app/_models/UsuarioAula";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {ModalService} from "@app/_modals";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
  idModalAddStudents: string = 'idModalAddStudents';
  aulaForm: FormGroup;
  loadingCreate: boolean;
  errorCreate: string;
  textCreateButton: string = 'Agregar';

  constructor(private formBuilder: FormBuilder,
              private aulaService: AulaService,
              private modalService: ModalService,
              private router: Router,
              private tareaEjercicioService: TareaEjerciciosService) {
  }

  ngOnInit() {
    this.aulaForm = this.formBuilder.group({
      estudiantes: ['', [Validators.required]]
    });
    this.fillStudentsList();
    this.errorCreate = '';
    if(this.aulaService.errorCreateClassroom) this.errorCreate = this.aulaService.errorCreateClassroom;
  }

  fillStudentsList() {
    this.studentsDataSource = this.aulaService.currentStudentsLoaded.map<studentItem>((student, index) => {
      if (student.usuarioActivo)
        return {position: index + 1, name: student.usuarioNombre, idUser: student.usuarioId}
    });
  }

  studentSelected(student: any) {
    this.errorCreate = '';
    console.log('eligio a :', student);
    this.currentStudent = this.aulaService.getStudentByUserId(student.idUser);
    this.studentTareasDataSource = this.tareaEjercicioService.getTareasEjercicioByUserId(student.idUser);
  }

  tareaSelected(tarea) {
    this.errorCreate = '';
    console.log(tarea);
    this.tareaDetailDataSource = this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta.filter(tareaRes => tareaRes.tareaEjercicioId === tarea.id);
    this.modalService.open(this.idRespuestasModal);
  }

  openModalConfirmation(student) {
    this.errorCreate = '';
    if(this.currentStudent)if(this.currentStudent.id === student.idUser)this.currentStudent = undefined;
    this.currentStudent = this.aulaService.getStudentByUserId(student.idUser);
    this.modalService.open(this.idConfirmationDialogDeleteStudent);
  }

  closeModalConfirmation() {
    this.modalService.close(this.idConfirmationDialogDeleteStudent);
  }

  openModalAddStudents() {
    this.errorCreate = '';
    this.modalService.open(this.idModalAddStudents);
  }

  closeModalAddStudents() {
    this.modalService.close(this.idModalAddStudents);
  }

  addStudents(){
    this.loadingCreate = true;
    this.textCreateButton = '';
    let studentsMails: string = this.aulaForm.controls.estudiantes.value;
    if(studentsMails){
      let studentsLCorreoList: string [] = studentsMails.split("\n");
      this.aulaService.saveStudentsInAula(this.aulaService.currentAulaLoaded.id ,studentsLCorreoList).subscribe(response => {
        console.log('Se registraron los estudiantes: ', response);
        this.loadingCreate = false;
        this.textCreateButton = 'Agregar';
        this.closeModalAddStudents();
        this.aulaForm.reset();
        this.aulaService.getAllMyUsuarioAulas().subscribe(students => {
          this.aulaService.loadUsuarioAulasByAulaId(this.aulaService.currentAulaLoaded);
          this.fillStudentsList();
          this.tareaEjercicioService.getAllTareaEjercioOpcionRespuestaByTeacher().subscribe(tareas => {
            this.tareaEjercicioService.getTipoEjercicios().subscribe(tiposE => {
              this.tareaEjercicioService.retrieveTareasEjercioFromTareasEjercicioRespuestas();
            });
          });
        });
      },error => {
        this.errorCreate = error.toString();
        this.loadingCreate = false;
        this.textCreateButton = 'Agregar';
      });
    }
  }

  goBackToClassroomsPage(){
    this.router.navigate(['/music/classrooms/']);
  }

  deleteStudent() {
    this.studentTareasDataSource = [];
    this.modalService.close(this.idConfirmationDialogDeleteStudent);
    this.aulaService.deleteUsuarioAula(this.currentStudent.id).subscribe(response => {
      this.aulaService.getAllMyUsuarioAulas().subscribe(students => {
        this.aulaService.loadUsuarioAulasByAulaId(this.aulaService.currentAulaLoaded);
        this.fillStudentsList();
        this.currentStudent = undefined;
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

