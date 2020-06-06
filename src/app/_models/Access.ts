import {Libro} from '@app/_models/Libro';

export class Access {
  id?: number;
  libroId?: number;
  usuarioId?: number;
  cuadernoTrabajo?: boolean;
  guiaDidactica?: boolean;
  activo?: boolean;
  libro?: Libro;
}
