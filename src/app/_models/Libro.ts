import {Pagina} from '@app/_models/Pagina';
import {LibroContenido} from '@app/_models/LibroContenido';
import {LibroAudio} from '@app/_models/LibroAudio';

export class Libro {
  id: number;
  titulo?: string;
  descripcion?: string;
  autor?: string;
}
