import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AulaService} from "@app/_services/aula.service";
import {UsuarioAula} from "@app/_models/UsuarioAula";
import {User} from "@app/_models";
import {TareaEjercicio} from "@app/_models/TareaEjercicio";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";
import {AuthenticationService} from "@app/_services";
import {TareaEjercicioOprecionRespuesta} from "@app/_models/TareaEjercicioOprecionRespuesta";
import {ModalService} from "@app/_modals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.scss', './../../shared/css/icons-config.css', './../../../css/bootstrap.css']
})
export class MyClassComponent implements OnInit {

  displayedTareasColumns: string[] = ['fecha', 'libro', 'tema', 'pagina', 'tipoEjercicioNombre', 'puntajeTotal'];
  claveAccesoForm: FormGroup;
  loading: boolean;
  textButton: string = 'Registrar';
  isRegisterSuccess: boolean;
  isAulaRegister: boolean;
  aulaUsuario: UsuarioAula;
  teacher: User;
  errorRegistro: string;
  studentTareasDataSource: TareaEjercicio[];
  tareaDetailDataSource: TareaEjercicioOprecionRespuesta[];
  displayedrespuestasColumns: string[] = ['nroRespuesta','ejercicioOpcionPreguntaEnunciado','respuesta','puntaje'];
  idRespuestasModal = 'idRespuestasModalStudent';
  errorDeleteMyClass: string = '';
  idModalDeleteMyClass: string = 'idModalDeleteMyClass';


  constructor(private formBuilder: FormBuilder,
              private aulaService: AulaService,
              private tareaEjercicioService: TareaEjerciciosService,
              private authenticationService: AuthenticationService,
              private modalService: ModalService,
              private router: Router) { }

  ngOnInit() {
    this.claveAccesoForm = this.formBuilder.group({
      claveAcceso:['', [Validators.required]]
    });
    this.loading = false;
    this.isAulaRegister = !!(this.aulaService.myAulaStudent);
    if(this.isAulaRegister){
      this.aulaUsuario = this.aulaService.myAulaStudent;
      this.teacher = this.aulaService.myStudentTeacher;
      this.loadStudentDataSource();
    }
  }

  loadStudentDataSource() {
    this.studentTareasDataSource = this.tareaEjercicioService.getTareasEjercicioByUserId(this.authenticationService.currentUserValue.id);
  }

  registerAula() {
    this.textButton = '';
    this.loading = true;
    this.aulaService.registerInAula(this.claveAccesoForm.controls.claveAcceso.value).subscribe(response => {
      console.log(response);
      let aula = response as UsuarioAula;
      if(aula.id){
        this.isRegisterSuccess = true;
        this.aulaUsuario = aula;
        this.aulaService.myAulaStudent = aula;
        this.isAulaRegister = true;
        this.aulaService.getMyTeacherUserData(aula.aulaUsuarioCreacionId).subscribe(teacher => {
          this.teacher = teacher;
          this.aulaService.myStudentTeacher = teacher;
        });
      }
    }, err => {
      console.log('No se pudo reigstrarte en el aula', err);
      this.errorRegistro = 'No se pudo registrar esta aula';
      this.textButton = 'Registrar';
      this.loading = false;
      this.claveAccesoForm.controls.claveAcceso.reset('');
    });
  }

  tareaSelected(tarea) {
    console.log(tarea);
    this.tareaDetailDataSource = this.tareaEjercicioService.allTareaaEjercicioOpcionRespuesta.filter(tareaRes => tareaRes.tareaEjercicioId === tarea.id);
    this.modalService.open(this.idRespuestasModal);
  }

  deleteClass(){
    this.aulaService.deleteUsuarioAula(this.aulaUsuario.id).subscribe(response => {
      console.log("eliminado");
      this.modalService.close(this.idModalDeleteMyClass);
      this.aulaService.getMyClassrom().subscribe(usuarioAula => {
        console.log(this.aulaService.myAulaStudent);
        if (usuarioAula)
          this.aulaService.getMyTeacherUserData(usuarioAula.aulaUsuarioCreacionId).subscribe(teacher => {
            this.aulaService.myStudentTeacher = teacher;
          });
        this.aulaService.myAulaStudent = undefined;
        this.router.navigate(['/music/home']);
      }, err => {
        console.log('Este usuarui no tiene un aula', err);
      });
    }, error => {
      this.errorDeleteMyClass = 'No se pudo eliminar el aula. '+error;
      this.modalService.close(this.idModalDeleteMyClass);
    });
  }

  openConfirmationDeleteMyClass() {
    this.modalService.open(this.idModalDeleteMyClass);
  }

  closeModalConfirmationDeleteMyClass(){
    this.modalService.close(this.idModalDeleteMyClass);
  }

}
