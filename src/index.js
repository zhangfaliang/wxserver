import reactDom from 'react-dom';
import React from 'react';
import App from './app';
import 'reset-css';
import { Route, BrowserRouter as Router} from 'react-router-dom'
//import routeConfig from './routes/index';
import children from './components/example/children';


reactDom.render(
  <App/>,
  document.getElementById("root")
)
