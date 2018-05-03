// 字符串扩展
// 字符串新增特性
// Unicode表示法    遍历接口
// 模板字符串   新增方法（10种）

{
  console.log('a', '\u0061');
  console.log('s', '\u20BB7');

  console.log('s', '\u{20BB7}');
  ;
}

{
  let s = '𠮷';

  // es5
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('0', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  // es6
  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0',s1.codePointAt(0));
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
}