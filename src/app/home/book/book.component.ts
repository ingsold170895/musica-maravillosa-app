import {Component, Input, OnInit} from '@angular/core';
import {BookCard} from '@app/shared/models/bookCard';
import {Router} from '@angular/router';
import {LibroService} from '@app/_services/libro.service';
import {ModalService} from '@app/_modals';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css', './../../../css/bootstrap.min.css']
})
export class BookComponent implements OnInit {
  @Input() bookCard: BookCard;

  isLoading: boolean = false;
  constructor(
    private libroService: LibroService,
    private route: Router,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
  }

  openBook() {
    console.log(this.bookCard.idLibro.toString());
    this.isLoading = true;
    try{
    this.libroService.getPages(this.bookCard.idLibro).subscribe(results => {
      console.log(results);
      this.isLoading = false;
      this.route.navigate(['/music/viwer']);
    });
    } catch(errorM) {
      console.log('Error al obtener los contenidos y audios', errorM.message);
      this.isLoading = false;
      return false;
    }
  }

  openFonoteca() {
    try{
      this.libroService.getPages(this.bookCard.idLibro);
      this.route.navigate(['/music/fonoteca']);
    }catch (errorM) {
      console.log('Error al obtener los contenidos y audios', errorM.message);
      return false;
    }
  }

  openGuide() {
    this.isLoading = true;
    try{
      this.libroService.getPages(this.bookCard.idLibro);
      this.isLoading = false;
      this.route.navigate(['/music/guide']);
    } catch (errorM) {
      console.log('Error al obtener los contenidos y audios', errorM.message);
      this.isLoading = false;
      return false;
    }
  }
}
