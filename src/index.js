﻿import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.js";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
}); 

store.dispatch(getPosts())
store.dispatch(getUser())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  

    , document.getElementById("root"));
