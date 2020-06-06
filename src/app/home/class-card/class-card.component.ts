import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassroomCard} from "@app/_models/ClassroomCard";
import {Router} from "@angular/router";
import {AulaService} from "@app/_services/aula.service";
import {Aula} from "@app/_models/Aula";
import {ModalService} from "@app/_modals";

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss', './../../shared/css/icons-config.css']
})
export class ClassCardComponent implements OnInit {
  @Input('aula') aula: Aula;
  @Output('openConfirmationDialog') openConfirmationDialog: EventEmitter<Aula> = new EventEmitter<Aula>();

  constructor(private router: Router,
              private aulaService: AulaService) { }

  ngOnInit() {
  }

  openClassroomData() {
    this.aulaService.loadUsuarioAulasByAulaId(this.aula);
    this.router.navigate(['/music/classroomData']);
  }

  deleteAula(){
    console.log('se enviara: ', this.aula);
    this.openConfirmationDialog.emit(this.aula);
  }

}
