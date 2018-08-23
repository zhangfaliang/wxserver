import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { crashReporter, logger } from "./midddleware/logger";

import todoApp from "./reducers";
import App from "./components/App";
import listenSaga from "./sagas/testAPI";
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      // thunkMiddleware,
      sagaMiddleware,
      logger

      //dispatchAndLog
    )
  )
);
sagaMiddleware.run(listenSaga);
//applyMiddlewareByMoneypatching(store,[logger])
//<Route path="/" component={App} />
render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
