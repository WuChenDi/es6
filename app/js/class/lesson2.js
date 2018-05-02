// 解构赋值
// 数组解构赋值   对象解构赋值   字符串解构赋值
// 布尔值解构赋值   函数参数解构赋值   数值解构赋值

{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}

{
  let a, b;
  ({ a, b } = { a: 1, b: 2 })
  console.log(a, b);
}
