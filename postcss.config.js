module.exports = {
  plugins: [

    require("postcss-px-to-viewport")({
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 著作权归作者所有。
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 著作权归作者所有。
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 著作权归作者所有。
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw 著作权归作者所有。
      selectorBlackList: [".ignore", ".hairlines"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 著作权归作者所有。
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 著作权归作者所有。
      mediaQuery: true // 允许在媒体查询中转换`px` 著作权归作者所有。
    }),
    require("postcss-partial-import"), //就是让你的css文件支持@import
    require("postcss-advanced-variables"), //像SASS那样可以自定义变量并进行引用
    require("postcss-aspect-ratio-mini"),
    require("postcss-write-svg")({ utf8: false }),
    require("postcss-cssnext"),
    require("postcss-nested")({ bubble: ["phone"] }), //像SASS那样可以父套子
    require("postcss-viewport-units"),
    require("cssnano")({
      //感觉就是css代码压缩工具（实际上它集成了很多强化的功能，表面上看起来是压缩实际上进行了相当多处理，可以看看这个表格Optimisations），他的配置建议采用默认配置，除非你知道你在做什么。
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    
    })
  ]
  //由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。对于其他的插件使用，稍后会简单的介绍。著作权归作者所有。

};
