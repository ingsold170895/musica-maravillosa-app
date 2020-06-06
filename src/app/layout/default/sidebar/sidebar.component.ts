import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@app/_services';
import {User} from '@app/_models';
import {Constants} from '@app/Constants/Constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', './../../../shared/css/icons-config.css']
})
export class SidebarComponent {
  currentUser: User;
  isTeacher: boolean;
  isAdmin: boolean;
  showAdminOptions: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.isTeacher = (this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_PROFESOR);
    this.isAdmin = (this.authenticationService.currentUserValue.idPerfil === Constants.PERFIL_ADMIN);
    this.showAdminOptions = this.isTeacher || this.isAdmin;
  }

  logout() {
    console.log(this.currentUser);
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
