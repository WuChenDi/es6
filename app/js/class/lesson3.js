// 正则扩展
// 正则新增特性
// 构造函数的变化   正则方法的扩展    u修饰符   y修饰符   s修饰符

{
  // es5
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  // es6
  let regex3 = new RegExp(/xyz/ig, 'i');
  console.log(regex3.flags);
}

