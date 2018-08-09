import { join } from "lodash";
import './style.css';
import CJ from '../static/img/1.png';
import Data from '../static/data/data.xml';
import printMe from './print';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  element.innerHTML = join(['Hello', 'webpack', ' ']);
  element.classList.add('hello');
  element.classList.add('icon-icon-geren');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  // 图片添加到现在的div
  const myCJ = new Image();
  myCJ.src = CJ;
  element.appendChild(btn)
  //element.appendChild(myCJ)
  console.log(Data);
  
  return element;
}
document.body.appendChild(component());
//在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，
//如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），
//你应该使用 npm install--save - dev。请在 npm 文档 中查找更多信息。

if (module.hot) { 
  module.hot.accept('./print.js',function () {
    console.log('accepting the updated prinMe module');
    printMe()
  })
}