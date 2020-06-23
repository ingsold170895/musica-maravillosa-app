import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/_services';
import {User} from '@app/_models';
import {Constants} from '@app/Constants/Constants';
import {Libro} from "@app/_models/Libro";
import {LibroService} from "@app/_services/libro.service";
import {AulaService} from "@app/_services/aula.service";
import {TareaEjerciciosService} from "@app/_services/tareaEjercicios.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss', './../../../shared/css/icons-config.css']
})
export class SidenavComponent {
  currentUser: User;
  isTeacher: boolean;
  isAdmin: boolean;
  showAdminOptions: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private libroService: LibroService,
    private aulaService: AulaService,
    private tareaService: TareaEjerciciosService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.isTeacher = (this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_PROFESOR);
    this.isAdmin = (this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_ADMIN ||
                    this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_ADMIN_USUARIOS ||
                    this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_ADMIN_CONTENIDO);
    this.showAdminOptions = this.isTeacher || this.isAdmin;
  }

  logout() {
    console.log(this.currentUser);
    this.aulaService.clearData();
    this.libroService.clearData();
    this.tareaService.clearData();
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
