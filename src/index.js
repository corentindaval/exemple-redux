﻿import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
}); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  

    , document.getElementById("root"));
