import {TareaEjercicio} from "@app/_models/TareaEjercicio";

export class TareaEjercicioOprecionRespuesta {
  id?: number;
  nroRespuesta?: number;
  respuesta?: string;
  puntaje?: number;
  tareaEjercicioId?: number;
  ejercicioOpcionPreguntaId?: number;
  tareaejercicio?: TareaEjercicio;
  ejercicioOpcionPreguntaEnunciado?: string;
  ejercicioOpcionPreguntaEjercicioOpcionId?: number;
}
