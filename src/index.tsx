import "./index.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { GlobalContextProvider } from "./GlobalContext";
import App from "./App";
import { Fish } from "./components/modules/Fish/Fish";
import { MouseCircle } from "./components/modules/Fish/MouseCircle";

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
    <GlobalContextProvider>
      <Provider store={store}>
        {/* <MouseCircle /> */}
        <Fish FISHSPEED={1} />
        <App />
      </Provider>
    </GlobalContextProvider>
  </React.StrictMode>
);
