import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Libro} from "@app/_models/Libro";


@Component({
  selector: 'app-export-all-students',
  templateUrl: './export-all-students.component.html',
  styleUrls: ['./export-all-students.component.scss']
})
export class ExportAllStudentsComponent implements OnInit {

  libroSelected: string;
  librosList: Libro[];

  constructor(private location: Location) { }

  ngOnInit() {
  }


  goBackPage(){
    this.location.back();
  }

  searchByLibro(libroSelected: string){

  }
}
