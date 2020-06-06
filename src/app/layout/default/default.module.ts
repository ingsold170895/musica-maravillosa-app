import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {HomeComponent} from '../../home/home.component';
import {LoginComponent} from '../../login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LOGIN_ROUTE} from '../../login/login-routing.module';
import {JhMaterialModule} from '../../jh-material.module';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeModule} from '../../home/home.module';
import {HOME_ROUTE} from '../../home/home-routing.module';
import {MatIconModule} from '@angular/material/icon'
import {NewPasswordComponent} from "@app/login/newPassword/newPassword.component";
import {ModalModule} from "@app/_modals";
import {NgxExtendedPdfViewerModule} from "@app/ngx-extended-pdf-viewer/ngx-extended-pdf-viewer.module";
import {SidenavComponent} from "@app/layout/default/sidenav/sidenav.component";



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    NewPasswordComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    JhMaterialModule,
    NgxExtendedPdfViewerModule,
    HomeModule,
    MatIconModule,
    RouterModule.forChild([
      LOGIN_ROUTE,
      HOME_ROUTE]),
    ReactiveFormsModule,
    ModalModule
  ],
  exports: [
    NgxExtendedPdfViewerModule,
    MatIconModule,
    SidenavComponent
  ]
})
export class DefaultModule {
}
