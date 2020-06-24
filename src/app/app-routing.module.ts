import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '@app/login';
import {HomeComponent} from './home/home.component';
import {DefaultComponent} from './layout/default/default.component';
import {ViwerPdfComponent} from './home/viwer-pdf/viwer-pdf.component';
import {FonotecaComponent} from '@app/home/fonoteca/fonoteca.component';
import {GuideComponent} from "@app/home/guide/guide.component";
import {AccountComponent} from "@app/home/account/account.component";
import {ClassroomComponent} from "@app/home/classroom/classroom.component";
import {ClassroomDataComponent} from "@app/home/classroom-data/classroom-data.component";
import {VideoPlayerComponent} from "@app/home/video-player/video-player.component";
import {MyClassComponent} from "@app/home/my-class/my-class.component";
import {ExportAllStudentsComponent} from "@app/home/classroom-data/export-all-students/export-all-students.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'facebook',
    component: VideoPlayerComponent
  },
  {
    path: 'music',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          pageTitle: 'Home'
        }
      },
      {
        path: 'viwer',
        component: ViwerPdfComponent,
        data: {
          pageTitle: 'Viwer'
        }
      },
      {
        path: 'fonoteca',
        component: FonotecaComponent,
        data: {
          pageTitle: 'Fonoteca'
        }
      },
      {
        path: 'guide',
        component: GuideComponent,
        data: {
          pageTitle: 'Guia'
        }
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          pageTitle: 'Account'
        }
      },
      {
        path: 'classrooms',
        component: ClassroomComponent,
        data: {
          pageTitle: 'Classrooms'
        }
      },
      {
        path: 'classroomData',
        component: ClassroomDataComponent,
        data: {
          pageTitle: 'ClassroomData'
        }
      },
      {
        path: 'myClassroom',
        component: MyClassComponent,
        data: {
          pageTitle: 'MyClassroom'
        }
      },
      {
        path: 'exportScores',
        component: ExportAllStudentsComponent,
        data: {
          pageTitle: 'Calificaciones'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
