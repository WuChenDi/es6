
# 基于gulp + Babel + webpack-stream + ES6/7 + nodejs + mockjs + Express.js 实现彩票项目

- Study es6([imooc](https://coding.imooc.com/class/98.html))

## 前端构架
***
- 页面结构(H5,CSS3,原生JS)
- 框架(gulp)进行搭建
- 使用mockjs模拟后台请求接口

## 项目运行（3000）
***
通过npm安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/en/))

```
cd es6

npm install 或 cnpm install(个人比较喜欢使用后者，下载依赖模块速度较快)

gulp --watch

```
## ES6和ES5之间徘徊的顾虑
- 数组操作(填充、类型转换、遍历等)
- 字符串扩展(字符串模板、重复计算unicode字符处理、补白操作等)
- 函数扩展(箭头函数、rest参数、默认值)
- 对象区别(省略的写法、属性表达式严格比较、对象拷贝)
- 数据结构(新增了Map和Set)
- 异步操作(Promise、Generatorasync和await)
- 类操作(类的声明、继承、构造函数静态函数、getter和setter等)
- 对象代理(让代码更安全)
- 遍历器(允许任意数据结构自定义遍历接口)
- 模块化(使用统一的模块化规范)

## 总结
- [es6语法demo](https://github.com/WuChenDi/es6/tree/master/app/js/class)调试对应demo时,请在es6/app/js/引入对应js(例：import './class/lesson1')
- 类 - 所有的功能模块都是建立在类之上的，最后通过多重继承实现代码整合
- 异步操作 - 解决了前后端通信的回调问题，使用异步操作（Promise）更简洁易懂
- 数据结构 - 使用Set解决数据集合元素不重复的问题，奖号和选号集合，使用Map存储玩法说明，读写清晰
- 函数扩展 - rest参数，默认值在选号操作和购物车增删方面表现很强的优势
- 对象代理 - 对彩种的核心数据状态进行保护不能进行写操作


## 项目效果图
<img src="https://raw.githubusercontent.com/WuChenDi/es6/master/screenshots/index.png" width="1349" height="650"/>