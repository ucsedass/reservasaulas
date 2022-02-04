import { combineReducers } from "redux";
import aulasReducer from "./aulasReducer";
export default combineReducers({
  aulas: aulasReducer,
});
