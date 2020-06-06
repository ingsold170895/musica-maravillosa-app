import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '@app/_modals/modal-password.component';
import {JhMaterialModule} from '@app/jh-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, JhMaterialModule, ReactiveFormsModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }
