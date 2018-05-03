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

{
  let x = 'test';
  // function test2(x, y = x) {
  //   console.log('作用域', x, y);
  // }
  function test2(c, y = x) {
    console.log('作用域', x, y);
  }
  // test2();
  test2('kill');
}

{
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a');
}

{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 4]);
}

{
  let arrow = v => v * 2;
  console.log('arrow', arrow(3));
  
  let arrow2 = () => 5;
  console.log('arrow2', arrow2());
}