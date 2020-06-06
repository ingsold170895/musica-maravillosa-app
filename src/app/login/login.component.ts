import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@app/_services';
import {first, timeout} from 'rxjs/operators';
import {ModalService} from '@app/_modals';
import {LibroService} from "@app/_services/libro.service";

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


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private modalService: ModalService,
    private libroService: LibroService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.authenticationService.headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
      this.authenticationService.pathRoot = this.router.routerState.snapshot.url.toLowerCase();
      this.libroService.currentAccess = null;
      this.router.navigate(['/music/home']);
    }
  }

  ngOnInit() {
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
    console.log('se hara login');
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          console.log('este es el token en completito');
          if (data.id_token != null) {
            this.authenticationService.requestAccount().pipe(first()).subscribe(user => {
              console.log('este es el usuario completito:');
              console.log(user);
              if (user.token === '') {
                //this.router.navigate(['/music/home']);
                console.log('datacmputer: ');
                console.log(DataComputer);
                console.log('user macc registered: ', user.macaddressData);
                if (user.macaddressData === DataComputer) {
                  this.router.navigate(['/music/home']);
                } else {
                  this.error = 'Esta computadora no esta registrada para este Usuario';
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
          if (error.toString() === 'error.http.401') {
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
