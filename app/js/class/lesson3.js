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
  // ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符。
}

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
  console.log(a1.sticky, a2.sticky);
}

