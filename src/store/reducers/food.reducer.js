import { types } from "../actions/types";

const INIT_STATE = {
  loading: false,
  items: [],
  error: null,
  food: null,
};

export const foodReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case types.LOADING:
      return { ...state, loading: true };

    case types.LOAD_FOODS_SUCCESS:
      return { ...state, loading: false, items: payload, error: null };

    case types.LOAD_FOOD_SUCCESS:
      return { ...state, loading: false, food: payload, error: null };

    case types.LOAD_FOODS_ERROR:
    case types.LOAD_FOOD_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return { ...state };
  }
};
