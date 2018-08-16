import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

import todoApp from "./reducers";
import App from "./components/App";

let store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
    )
  )
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
