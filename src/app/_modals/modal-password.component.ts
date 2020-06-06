import {Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';

import {ModalService} from '@app/_modals/modal-password.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "@app/_services";

@Component({
  selector: 'app-modal-password',
  templateUrl: 'modal-password.component.html',
  styleUrls: ['modal-password.model.less'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() marginSpace: any;
  @Input() opacity: number;
  @Input() marginTop: any;
  @Input() heigthBody: any;

  private element: any;


  constructor(private modalService: ModalService,
              private el: ElementRef,
              private authenticationService: AuthenticationService
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }


}
