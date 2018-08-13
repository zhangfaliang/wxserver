import "./style.css";
import CJ from "../static/img/1.png";
import Data from "../static/data/data.xml";
import printMe from "./print";
import { cube } from "./math";
import { file, parse } from "./globals.js";
import viewportUnitsBuggyfillHacks from "../src/viewportUnitsBuggyfillHacks";
import { init } from "viewport-units-buggyfill";

init({
  hacks: viewportUnitsBuggyfillHacks
});
// window.onload = function() {
//   var winDPI = window.devicePixelRatio;
//   var uAgent = window.navigator.userAgent;
//   var screenHeight = window.screen.height;
//   var screenWidth = window.screen.width;
//   var winWidth = window.innerWidth;
//   var winHeight = window.innerHeight;
//   console.log(
//     "Windows DPI:" +
//       winDPI +
//       ";\ruAgent:" +
//       uAgent +
//       ";\rScreen Width:" +
//       screenWidth +
//       ";\rScreen Height:" +
//       screenHeight +
//       ";\rWindow Width:" +
//       winWidth +
//       ";\rWindow Height:" +
//       winHeight
//   );
// };

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  element.classList.add("hello");
  element.classList.add("icon-icon-geren");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => printMe;
  // import(/*webpackChunkName: 'lodash'*/ "./print").then(module => {
  //   var print = module.default;
  //   print();
  // });

  // 图片添加到现在的div
  const myCJ = new Image();
  myCJ.src = CJ;
  element.appendChild(btn);
  //element.appendChild(myCJ)
  console.log(file);

  return element;
}
document.body.appendChild(component());

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(json => {
//     console.log(
//       "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
//     );
//     console.log(json);
//   })
//   .catch(error =>
//     console.error("Something went wrong when fetching this data: ", error)
//   );
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then(registration => {
//         console.log("SW registered: ", registration);
//       })
//       .catch(registrationError => {
//         console.log("SW registration failed: ", registrationError);
//       });
//   });
// }

//在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，
//如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），
//你应该使用 npm install--save - dev。请在 npm 文档 中查找更多信息。

// if (module.hot) {
//   module.hot.accept('./print.js',function () {
//     console.log('accepting the updated prinMe module');
//     printMe()
//   })
// }

// function getComponent(params) {
//   return import(/*webpackChunkName*/'lodash').then(_ => {
//     var element = document.createElement('div');
//     var _ = _.default;
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// })
