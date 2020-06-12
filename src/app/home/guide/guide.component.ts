import { Component, OnInit } from '@angular/core';
import {LibroService} from "@app/_services/libro.service";
import {Indice} from "@app/_models/indice";
import {sha256} from "js-sha256";


@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  sourcePDF: string;
  topicSelected: string;
  pageNumber: number;
  titulo: string = '';

  temas: Indice[] = [
    {id:1, pagina:8, tema:'Tema 1'},
    {id:2, pagina:11, tema:'Tema 2'},
    {id:3, pagina:14, tema:'Tema 3'}];

  constructor( private libroService: LibroService)
  {
  }

  ngOnInit() {
    this.titulo = this.libroService.currentBook.titulo;
    let tituloSha256 = sha256(this.libroService.currentBook.titulo);
    console.log(tituloSha256);
    const pathPdf = './../assets/pen5/gui/' + tituloSha256;
    this.sourcePDF = pathPdf.toString();

    this.temas = this.libroService.currentPageContents.map(libroContenido => {
      return {id:libroContenido.id, pagina: libroContenido.numeroPagina, tema: libroContenido.tema};
    });
    this.temas = this.removeDuplicateItemsInTemas(this.temas);

  }

  searchByTopic(page: number) {
    this.pageNumber = page;
  }

  removeDuplicateItemsInTemas(duplicates: any[]): any[] {
    if(!duplicates) return;
    let cleanData = [];
    duplicates.map(obj => {
      console.log(obj);
      let existItem = cleanData.filter(item => item.tema === obj.tema);
      if (existItem.length === 0) {
        cleanData.push(obj);
      } else {
        console.log('ya existe en clean data', obj);
      }
    });
    return cleanData;
  }
}
