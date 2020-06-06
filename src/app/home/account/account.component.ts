import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "@app/_services";
import {ModalService} from "@app/_modals";
import {User} from "@app/_models";
import {Constants} from "@app/Constants/Constants";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss', './../../../css/bootstrap.css']
})
export class AccountComponent implements OnInit {

  newPasswordForm: FormGroup;
  isSuccess: boolean;
  isError: boolean;
  user: User;
  profile: string;


  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.profile =  (this.user.idPerfil === Constants.PERFIL_ADMIN)? Constants.PERFIL_ADMIN_NAME:
                    (this.user.idPerfil === Constants.PERFIL_PROFESOR)? Constants.PERFIL_PROFESOR_NAME : Constants.PERFIL_USUARIO_NAME;
    this.newPasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('newPassword').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : {notSame: true};
  }

  changePassword() {
    this.authenticationService.changePassword(
      this.newPasswordForm.controls.currentPassword.value,
      this.newPasswordForm.controls.newPassword.value).subscribe(async usuario => {
        this.isSuccess = true;
      await this.delay(2000);
      this.isSuccess = false;
      this.clearForm();
    }, async (err) => {
        this.isError = true;
      await this.delay(2000);
      this.isError = false;
      this.clearForm();
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  clearForm() {
    this.newPasswordForm.reset();
  }
}
