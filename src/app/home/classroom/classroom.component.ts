import {Component, OnInit} from '@angular/core';
import {ClassroomCard} from "@app/_models/ClassroomCard";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AulaService} from "@app/_services/aula.service";
import {Aula} from "@app/_models/Aula";
import {AuthenticationService} from "@app/_services";
import {ModalService} from "@app/_modals";
import {from, Observable} from "rxjs";
import {concatMap} from "rxjs/operators";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss', './../../../css/bootstrap.css', './../../shared/css/icons-config.css']
})
export class ClassroomComponent implements OnInit {
  idConfirmationDialog: string = 'idConfirmationDialog';

  classroomsList: Aula[];
  idModalCreateClassroom: string = 'idModalCreateClassroom';
  idModalLoadingCreateClass: string = 'idModalLoadingCreateClass';
  aulaForm: FormGroup;
  loadingCreate: boolean;
  textCreateButton: string = 'Crear';
  errorCreate: string;
  aulaDelete: Aula;
  loadingCreateClass: boolean;
  loadingDeleteClass: boolean;
  textDeleteConfirmButton: string = 'Si';


  constructor(private formBuilder: FormBuilder,
              private modalService: ModalService,
              private aulaService: AulaService,
              private authenticationService: AuthenticationService,
              private tareaEjercicioService: TareaEjerciciosService) {
  }

  ngOnInit() {
    this.aulaForm = this.formBuilder.group({
      colegio: ['', [Validators.required]],
      nombreClase: ['', [Validators.required]],
      estudiantes: ['']
    });
    this.fillClassroomsList();
  }

  fillClassroomsList() {
    this.classroomsList = this.aulaService.currentAulaList;
  }

  crearAula() {
    this.loadingCreateClass = true;
    this.modalService.open(this.idModalLoadingCreateClass);
    this.loadingCreate = true;
    this.textCreateButton = '';
    let aula: Aula = new Aula();
    aula.activa = true;
    aula.colegio = this.aulaForm.controls.colegio.value;
    aula.nombre = this.aulaForm.controls.nombreClase.value;
    aula.usuarioCreacionId = this.authenticationService.currentUserValue.id;
    this.aulaService.createAula(aula).subscribe(aulaResponse => {
      let newAula = aulaResponse as Aula;
      this.aulaService.currentAulaList.push(newAula);
      console.log(this.aulaService.currentAulaList);
      let studentsMails: string = this.aulaForm.controls.estudiantes.value;
      if(studentsMails){
        let studentsLCorreoList: string [] = studentsMails.split("\n");
        this.aulaService.saveStudentsInAula(newAula.id ,studentsLCorreoList).subscribe(response => {
          console.log('Se registraron los estudiantes: ', response);
          this.aulaService.getAllMyUsuarioAulas().subscribe(response => {
            this.tareaEjercicioService.getAllTareaEjercioOpcionRespuestaByTeacher().subscribe(tareas => {
              this.tareaEjercicioService.getTipoEjercicios().subscribe(tiposE => {
                this.tareaEjercicioService.retrieveTareasEjercioFromTareasEjercicioRespuestas();
              });
            });
          })
        }, error => {
          this.aulaService.errorCreateClassroom = this.aulaService.errorCreateClassroom + "\n" +error.toString();
          this.errorCreate = error.toString();
          this.loadingCreate = false;
          this.textCreateButton = 'Crear';
          this.modalService.close(this.idModalLoadingCreateClass);
        });
      }
      this.loadingCreateClass = false;
      this.modalService.close(this.idModalLoadingCreateClass);
    });
    this.loadingCreate = false;
    this.textCreateButton = 'Crear';
    this.modalService.close(this.idModalCreateClassroom);
    this.modalService.close(this.idModalLoadingCreateClass);
  }

  openModalCreateClassroom() {
    this.modalService.open(this.idModalCreateClassroom);
  }

  openConfirmationDialog(aula: Aula) {
    console.log('childern send: ', aula);
    this.aulaDelete = aula;
    this.modalService.open(this.idConfirmationDialog);
  }

  deleteAula() {
    this.loadingDeleteClass = true;
    this.textDeleteConfirmButton = '';
    let idAulaDelete = this.aulaDelete.id;
    this.aulaService.deleteAula(this.aulaDelete).subscribe(aula => {
      this.aulaService.liberarStudentsAfterDeleteAula(idAulaDelete).subscribe(response => {
        console.log("alumnos liberados");
      });
      this.aulaService.getAllMyClassrooms().subscribe(classrooms => {
        this.aulaService.currentAulaList = classrooms as Aula[];
        this.classroomsList = this.aulaService.currentAulaList;
        this.modalService.close(this.idConfirmationDialog);
        this.loadingDeleteClass = false;
        this.textDeleteConfirmButton = 'Si';
      });
    }, err => {
      alert("No se pudo eliminar el Aula");
      this.modalService.close(this.idConfirmationDialog);
      this.loadingDeleteClass = false;
      this.textDeleteConfirmButton = 'Si';
    });
  }

  closeModalConfirmation() {
    this.modalService.close(this.idConfirmationDialog);
  }

}


