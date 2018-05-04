// 数据结构
// Set的用法    Weakset的用法
// Map的用法    Weakmap的用法

{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log('size', list.size);
}

{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);
  console.log('size', list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);

  // 去重
  let arr = [1, 2, 3, 1, 2];
  let list2 = new Set(arr);
  console.log('unique', list2);
}