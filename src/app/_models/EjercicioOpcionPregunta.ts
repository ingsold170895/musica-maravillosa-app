import {EjercicioOpcionRespuesta} from '@app/_models/EjercicioOpcionRespuesta';

export class EjercicioOpcionPregunta {
  id?: number;
  nroPregunta?: string;
  pregunta?: string;
  ejercicioOpcionId?: number;
  respuestas?: EjercicioOpcionRespuesta[];
  respuestaElegida?: string;
}
