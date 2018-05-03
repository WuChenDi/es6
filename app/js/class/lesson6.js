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
  // Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent);
  });

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2
  }));
}

{
  // fill()函数，使用制定的元素填充数组，其实就是用默认内容初始化数组
  /*
    arr.fill(value, start, end)
    value：填充值。
    start：填充起始位置，可以省略。
    end：填充结束位置，可以省略，实际结束位置是end-1。
  */
  console.log('fill-7', [1, 'a', undefined].fill(7));
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
  // ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index);
  }

  for (let values of ['1', 'c', 'ks'].values()) {
    console.log('values', values);
  }
}