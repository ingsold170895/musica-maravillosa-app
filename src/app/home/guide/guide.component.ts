import { Component, OnInit } from '@angular/core';
import {LibroService} from "@app/_services/libro.service";
import {Indice} from "@app/_models/indice";


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  sourcePDF: string;
  topicSelected: string;
  pageNumber: number;

  temas: Indice[] = [
    {id:1, pagina:8, tema:'Tema 1'},
    {id:2, pagina:11, tema:'Tema 2'},
    {id:3, pagina:14, tema:'Tema 3'}];

  constructor( private libroService: LibroService)
  {
  }

  ngOnInit() {
    const pathPdf = './../assets/PDF/guides/' + this.libroService.currentBook.titulo + '.pdf';
    this.sourcePDF = pathPdf.toString();
  }

  searchByTopic(page: number) {
    this.pageNumber = page;
  }
}
