import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from '../src/reducers/index';
import AsyncApp from '../src/asyncApp';
import { renderToString } from 'react-dom/server'
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // 警告：关于在 HTML 中嵌入 JSON 的安全问题，请查看以下文档
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/runtime.129969e304cbe55a1e83.js"></script><script type="text/javascript" src="/vendors.0171376aecb4de217dc9.js"></script><script type="text/javascript" src="/polyfills.606f5a5101482c5c7d78.js"></script><script type="text/javascript" src="/index.9f2816fc73ebe592f8af.js"></script><script type="text/javascript" src="/clinet.561b8a8d6bfd7755df7d.js"></script></body>

      </body>
    </html>
    `
}

const page = Router => {
  const renderServer = new Router();
  renderServer
    .get("/", async ctx => {
     
        // 创建新的 Redux store 实例
        const store = createStore(counterApp);
        // 把组件渲染成字符串
        const html = renderToString(
          <Provider store={store}>
            <AsyncApp />
          </Provider>
        )
        // 从 store 中获得初始 state
        const preloadedState = store.getState();
      
        // 把渲染后的页面内容发送给客户端
        ctx.body = (renderFullPage(html, preloadedState));

    })
    .get("/helloworld", async ctx => {
      ctx.body = "hellow word page";
    });
  return renderServer;
};
module.exports = page;