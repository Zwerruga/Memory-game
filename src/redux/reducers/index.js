import { combineReducers } from "redux";
import { cardReducer as cards } from "./cardReducer.js";
import { recordReducer as records } from "./recordReducer.js";
import { scoreReducer as score } from "./scoreReducer.js";

export const rootReducer = combineReducers({
  cards,
  records,
  score
});
