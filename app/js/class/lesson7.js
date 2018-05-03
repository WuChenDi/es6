// 函数扩展
// 参数默认值   rest参数    扩展运算符
// 箭头函数   this绑定    尾调用

{
  // 参数默认值
  function test(x, y = 'world') {
    console.log('默认值', x, y);
  }
  test('hello');
  test('hello', 'wuchendi');
}