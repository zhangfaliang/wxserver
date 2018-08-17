import React from 'react';
import { hydrate } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from '../reducers/index';
import App from '../asyncApp';
// 通过服务端注入的全局变量得到初始 state
const preloadedState = window.__PRELOADED_STATE__
console.log( window.__PRELOADED_STATE__,'00000000000');

// 使用初始 state 创建 Redux store
const store = createStore(counterApp, preloadedState)

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)