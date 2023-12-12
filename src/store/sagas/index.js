import { takeLatest } from "redux-saga/effects";

import { types } from "../actions/types";
import { loadFood, loadFoods } from "./food.saga";

export default function* userActions() {
  yield takeLatest(types.LOAD_FOODS, loadFoods);
  yield takeLatest(types.LOAD_FOOD, loadFood);
}
