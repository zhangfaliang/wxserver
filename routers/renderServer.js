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
        <script src="/js/clinet.83d38f6bb1bc37f1e197.js"></script>

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