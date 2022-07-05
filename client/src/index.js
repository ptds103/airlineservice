import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
