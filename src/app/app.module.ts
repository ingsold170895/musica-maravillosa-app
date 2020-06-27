import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DefaultModule} from './layout/default/default.module';
import {JhMaterialModule} from './jh-material.module';
//import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BasicAuthInterceptor} from './_helpers/basic-auth.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend';
import { HttpClientModule} from '@angular/common/http';
import {ModalModule} from '@app/_modals/modal-password.module';
import {ErrorInterceptor} from '@app/_helpers/error.interceptor';
import {NgxAudioPlayerModule} from "@app/ngx-audio-player/ngx-audio-player.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    DefaultModule,
    JhMaterialModule,
    NgxAudioPlayerModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  exports: [JhMaterialModule, HttpClientModule],

})

export class AppModule {
}
