import { types } from "./types";

export const loading = () => {
  return { type: types.LOADING };
};

export const loadFoods = () => {
  return { type: types.LOAD_FOODS };
};

export const loadFood = (payload) => {
  return { type: types.LOAD_FOOD, payload };
};
