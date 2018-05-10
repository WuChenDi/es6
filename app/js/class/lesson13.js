// Promise
// 什么是异步
// Promise的作用
// Promise的基本用法

{
  // 基本定义
  let ajax = function (callback) {
    console.log('执行');
    setTimeout(function () {
      callback && callback.call()
    }, 1000);
  };
  ajax(function () {
    console.log('timeout1');
  })
}