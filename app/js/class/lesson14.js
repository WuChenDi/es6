// Iterator和for...of循环
// 什么是Iterator接口
// Iterator的基本用法
// for...of

{
  let arr = ['hello','world'];
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}