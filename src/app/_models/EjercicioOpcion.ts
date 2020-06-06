import {EjercicioOpcionPregunta} from '@app/_models/EjercicioOpcionPregunta';
import {EjercicioOpcionRespuesta} from '@app/_models/EjercicioOpcionRespuesta';

export interface EjercicioOpcionI {
  id: number;
  instruccion?: string;
  preguntas?: EjercicioOpcionPregunta[];
  respuestas?: EjercicioOpcionRespuesta[];
}

export class EjercicioOpcion implements EjercicioOpcionI {
  id: number;
  instruccion: string;
  preguntas: EjercicioOpcionPregunta[];
  respuestas: EjercicioOpcionRespuesta[];

  getRespuestasByPreguntaId(preguntaId: number): EjercicioOpcionRespuesta[] {
    return this.respuestas.filter(r => r.ejercicioOpcionPreguntaId === preguntaId);
  }
}
