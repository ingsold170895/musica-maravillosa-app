import {LibroContenido} from '@app/_models/LibroContenido';
import {LibroAudio} from '@app/_models/LibroAudio';

export class Pagina {
  contenido?: LibroContenido;
  audios?: LibroAudio[];
  narraciones?: LibroAudio[];
  karaokes?: LibroAudio[];
  canciones?: LibroAudio[];
}
