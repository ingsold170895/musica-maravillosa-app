import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HOME_ROUTE} from './home-routing.module';
import { ViwerPdfComponent } from './viwer-pdf/viwer-pdf.component';
import {JhMaterialModule} from '../jh-material.module';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {FlexModule, GridModule} from '@angular/flex-layout';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {HomeComponent} from './home.component';
import { BookComponent } from './book/book.component';
import { FonotecaComponent } from './fonoteca/fonoteca.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "@app/_modals";
import {NgxExtendedPdfViewerModule} from '@app/ngx-extended-pdf-viewer/ngx-extended-pdf-viewer.module';
import { GuideComponent } from './guide/guide.component';
import { AccountComponent } from './account/account.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { ClassroomDataComponent } from './classroom-data/classroom-data.component';
import { PentagramaPdfComponent } from './viwer-pdf/pentagrama-pdf/pentagrama-pdf.component';
import { MyClassComponent } from './my-class/my-class.component';
import { ExportAllStudentsComponent } from './classroom-data/export-all-students/export-all-students.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  declarations: [ViwerPdfComponent, VideoPlayerComponent, BookComponent, FonotecaComponent, GuideComponent, AccountComponent, ClassroomComponent, ClassCardComponent, ClassroomDataComponent, PentagramaPdfComponent, MyClassComponent, ExportAllStudentsComponent],
  exports: [
    ViwerPdfComponent,
    VideoPlayerComponent,
    NgxExtendedPdfViewerModule,
    BookComponent,
    JhMaterialModule,
    FonotecaComponent
  ],
  imports: [
    NgxExtendedPdfViewerModule,
    CommonModule,
    JhMaterialModule,
    RouterModule.forChild([
      HOME_ROUTE
    ]),
    NgxAudioPlayerModule,
    GridModule,
    FlexModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
