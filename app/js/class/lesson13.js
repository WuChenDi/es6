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

{
  let ajax = function () {
    console.log('执行2');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };
  ajax().then(function () {
    console.log('Promise', 'timeout2');
  })
}

{
  let ajax = function () {
    console.log('执行3');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };
  ajax()
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
  .then(function () {
    console.log('timeout3');
  })
}