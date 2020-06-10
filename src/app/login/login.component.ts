import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@app/_services';
import {first, timeout} from 'rxjs/operators';
import {ModalService} from '@app/_modals';
import {LibroService} from "@app/_services/libro.service";
import {IpcService} from "@app/_services/ipc.service";

declare const DataComputer: any;
declare const version_app: any;
declare const isUpdateReady: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  loginForm: FormGroup;
  textButton = 'Entrar';
  confirmPasswordForm: FormGroup;
  resetPasswordForm: FormGroup;
  loadingPassword = false;
  loadingReset = false;
  textPasswordButton = 'Guardar';
  textResetPasswordButton = 'Enviar';
  errorPassword = '';
  errorReset = '';
  resetSuccess: string;
  version_app = '';
  updateAvailable = '';
  errorUpdate = '';
  downloadProgress: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private modalService: ModalService,
    private libroService: LibroService,
    private ipcService: IpcService,
    private zone: NgZone
  ) {



  }

  ngOnInit() {
    //CHECKING FOR UPDATES
    this.ipcService.on("message", (event: Electron.IpcMessageEvent)=>{
      console.log(event);
    });
    this.ipcService.on("update-available", (event: Electron.IpcMessageEvent)=>{
      this.updateAvailable = "Actualizando a una nueva versión...";
      console.log(this.updateAvailable);
      this.modalService.open("update-available");
    });
    this.ipcService.on("error-update", (event: Electron.IpcMessageEvent)=>{
      this.errorUpdate = "No se pudo actualizar la aplicación.";
    });
    this.ipcService.on("download-progress", (event: Electron.IpcMessageEvent, args: Electron.IpcMessageEvent)=>{
     this.zone.run(()=>{
       let progress = parseFloat(args.toString()).toFixed(2);
       this.setProgressUpdate(progress);
       console.log(progress);
     });
    });

    if(this.downloadProgress){
      this.errorPassword = "Actualización en curso";
    } else {

      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
        this.authenticationService.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
        this.authenticationService.pathRoot = this.router.routerState.snapshot.url.toLowerCase();
        this.libroService.currentAccess = null;
        this.router.navigate(['/music/home']);
      }
    }


    console.log(isUpdateReady);
    this.version_app = version_app;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.resetPasswordForm = this.formBuilder.group({
      correoReset: ['', [Validators.required, Validators.email]]
    });

    this.confirmPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.checkPasswords});
    // get return url from route parameters or default to '/'
    this.returnUrl = '/music/home';
  }

  quitAndInstall(){
    this.ipcService.send("quitAndInstall");
  }

  setProgressUpdate(progressPercent: string){
    console.log("porgress: ",progressPercent);
    this.downloadProgress = progressPercent;
    this.updateAvailable = "Actualizando a una nueva versión: "+ this.downloadProgress +"%";
  }

  hiddenUpdateModal(){
    this.modalService.close("update-available");
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : {notSame: true};
  }

  get f() {
    return this.loginForm.controls;
  }

  openResetPasswordModal() {
    this.modalService.open('resetPasswordModal');
    this.loading = false;
    this.textButton = 'Entrar';
    this.error = '';
    this.errorReset = '';
    this.errorPassword = '';
  }

  onSubmit() {
    if(this.downloadProgress){
      this.errorPassword = "Actualización en curso";
      return;
    }
    this.textButton = '';
    this.submitted = true;
    this.loading = true;
    this.error = '';
    this.errorReset = '';
    this.errorPassword = '';
    this.resetSuccess = '';
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.id_token != null) {
            this.authenticationService.requestAccount().pipe(first()).subscribe(user => {
              if (user.token === '') {
                if (user.macaddressData === DataComputer) {
                  this.router.navigate(['/music/home']);
                } else {
                  this.error = 'Esta computadora no esta registrada para este Usuario. Utiliza "Olvide mi contraseña" para registrarte en esta computadora. "';
                  this.loading = false;
                  this.submitted = false;
                  this.textButton = 'Entrar';
                  this.resetSuccess = '';
                }
              } else {
                this.modalService.open('1');
              }
            });
          }
        },
        error => {
          console.log(error);
          if (error.toString() === 'Error de Autenticación' || error.toString() === 'Bad credentials') {
            this.error = 'Datos Incorrectos';
          } else {
            if (error.message === 'Timeout has occurred') {
              this.error = 'Mala conexión con la red';
            } else {
              this.error = error.message;
            }
          }
          this.loading = false;
          this.submitted = false;
          this.textButton = 'Entrar';
        }, () => {
          if (!this.authenticationService.isAuthenticated) {
            this.error = "Datos Incorrectos";
            this.resetSuccess = '';
          }
        });
  }


  updatePassword() {
    if(this.downloadProgress){
      this.errorPassword = "Actualización en curso";
      return;
    }
    this.loadingPassword = !this.loadingPassword;
    this.textPasswordButton = '';
    this.authenticationService.updatePassword(this.confirmPasswordForm.controls.password.value)
      .pipe(first())
      .subscribe(user => {
        console.log('este es el usuario NUEVO coempelto:');
        console.log(user);
        if (user.token === '') {
          this.authenticationService.saveDataComputer(DataComputer).subscribe(user => {
              this.router.navigate(['/music/home']);
            }
            , err => {
              this.errorPassword = 'No se pudo actualizar la clave.'
              this.loadingPassword = false;
              this.loadingReset = false;
              this.loading = false;
              this.textButton = 'Entrar';
              this.textPasswordButton = 'Guardar';
            });

        }
      });
  }

  requestResetPassword() {
    if(this.downloadProgress){
      this.errorPassword = "Actualización en curso";
      return;
    }
    this.loadingReset = !this.loadingPassword;
    this.textResetPasswordButton = '';
    this.authenticationService.requestResetPassword(this.resetPasswordForm.controls.correoReset.value).subscribe(response => {
      console.log(response);
      this.modalService.close('resetPasswordModal');
      this.resetSuccess = "Se envió un codigo temporal a su correo electrónico.";
      this.loadingReset = false;
      this.textResetPasswordButton = 'Enivar';
    }, err => {
      this.loadingReset = false;
      this.textResetPasswordButton = 'Enviar';
      this.errorReset = 'No se pudo completar tu solicitud';
    });
  }

}
