module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-partial-import'),//就是让你的css文件支持@import
    require('postcss-advanced-variables'),//像SASS那样可以自定义变量并进行引用
    require('cssnano')({
      preset: 'default',
    }),
  ] ,
  "postcss-pxtorem":{
    rootValue: 75,
    unitPrecision: 5,
    propList: ['*'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 12,
    propWhiteList: [],
   }
  //  rootValue为75，说是对根元素大小进行设置。可能类似px2rem中的remUnit参数吧
  //  unitPrecision为5，起初我真不知道这个官方说的The decimal numbers to allow the REM units to grow to.是啥意思，搞了半天才观察出来，原来是转换成rem后保留的小数点位数。。。
  //  propList是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']意思是排除带有border的属性，当然这里会有一个问题，也许有时候不想对border其他样式处理例如border-radius所以也不是很好。
  //  selectorBlackList则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
  //  minPixelValue是一个非常不错的选项，我设置了12，意思是所有小于12px的样式都不被转换，那么border之类的属性自然会保留px值了。而刚才提到的border-radius如果为了创造圆形等特殊较大圆弧时则还是会转换成rem，来配合对应的width和height（当然，你也可以用继承width或者height的变量来设置radius）。
  
}