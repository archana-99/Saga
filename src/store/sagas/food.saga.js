import axios from "axios";
import { call, put } from "redux-saga/effects";
import { types } from "../actions/types";

const loadAsyncFoods = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/foods`);
    return data;
  } catch (error) {
    throw new Error(
      error?.response?.status ?? 0 >= 500
        ? "Something went wrong! Please try again."
        : error?.data?.message ?? "Error"
    );
  }
};

const loadAsyncFood = async (food) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/foods/${food}`
    );
    return data;
  } catch (error) {
    throw new Error(
      error?.response?.status ?? 0 >= 500
        ? "Something went wrong! Please try again."
        : error?.data?.message ?? "Error"
    );
  }
};

export function* loadFoods() {
  try {
    const foods = yield call(loadAsyncFoods);

    yield put({ type: types.LOAD_FOODS_SUCCESS, payload: foods });
  } catch (error) {
    yield put({ type: types.LOAD_FOODS_ERROR, payload: error });
  }
}

export function* loadFood({ payload }) {
  try {
    const food = yield call(loadAsyncFood, payload);

    yield put({ type: types.LOAD_FOOD_SUCCESS, payload: food });
  } catch (error) {
    yield put({ type: types.LOAD_FOOD_ERROR, payload: error });
  }
}
