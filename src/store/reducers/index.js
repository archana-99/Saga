import { combineReducers } from "redux";
import { foodReducer } from "./food.reducer";

const rootReducer = combineReducers({
  foods: foodReducer,
});

export default rootReducer;
