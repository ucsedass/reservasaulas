import { AGREGAR_AULA, AGREGAR_AULA_EXITO, AGREGAR_AULA_ERROR } from "../types";
//cada reducer tiene su propio state
const initialState = {
  aulas: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_AULA:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_AULA_EXITO:
      return {
        ...state,
        loading: false,
        aulas: [...state.aulas, action.payload],
      };

    case AGREGAR_AULA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
