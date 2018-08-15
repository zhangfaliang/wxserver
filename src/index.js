import reactDom from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import App from './app';
import 'reset-css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
//import routeConfig from './routes/index';
import children from './components/example/children';
import todoApp from './reducers/todo';

let store = createStore(todoApp);
console.log(store.getState(),'99999')
reactDom.render(
  <App/>,
  document.getElementById("root")
)
