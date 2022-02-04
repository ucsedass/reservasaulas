import { AGREGAR_AULA, AGREGAR_AULA_EXITO, AGREGAR_AULA_ERROR } from "../types";

//crear nuevas aulas

export function crearNuevaAulaAction(aula) {
  return (dispatch) => {
    dispatch(agregarAula());

    try {
      dispatch(agregarAulaExito(aula));
    } catch (error) {
      dispatch(agregarAulaError(true));
    }
  };
}

const agregarAula = () => ({
  type: AGREGAR_AULA,
  payload: true,
});

//si el aula se guarda
const agregarAulaExito = (aula) => ({
  type: AGREGAR_AULA_EXITO,
  payload: aula,
});

//si hay un error
const agregarAulaError = (estado) => ({
  type: AGREGAR_AULA_ERROR,
  payload: estado,
});
