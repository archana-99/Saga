import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "bootstrap/dist/css/bootstrap.min.css";

import rootReducer from "./store/reducers";
import userActions from "./store/sagas";
import Header from "./components/Header";
import FoodDetail from "./components/FoodDetail";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userActions);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<App />} path={"/"} exact />
          <Route element={<FoodDetail />} path={"/foods/:food/recipes"} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
