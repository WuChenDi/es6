// 数值扩展
// Array.from   Array.of    copyWithin
// find\findIndex   fill    entries\keys\values
// inludes

{
  // Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log('arr=', arr);

  let empty = Array.of();
  console.log('empty', empty);
}

{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent);
  });

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2
  }));
}