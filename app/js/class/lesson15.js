// Generator
// 基本概念
// next函数的用法
// yield*的语法

// generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。

{
  // genertaor基本定义
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  };
}