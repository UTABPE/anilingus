import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const container = document.getElementById("root")!;
const root = createRoot(container);

const defaultState = {
  login: false,
};

//ACTIONS

const LOG_IN = createAction("LOG_IN");
const LOG_OUT = createAction("LOG_OUT");

const loginReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(LOG_IN, (state, action) => {
      state.login = true;
    })
    .addCase(LOG_OUT, (state, action) => {
      state.login = false;
    });
});

// const reducer = (state: any = defaultState, action: any) => {
//   switch (action.type) {
//     case "LOG_IN":
//       return { ...state, login: !state.login };
//     case "LOG_OUT":
//       return { ...state, login: !state.login };

//     default:
//       return state;
//   }
// };
const store = configureStore({
  reducer: { login_key: loginReducer },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
