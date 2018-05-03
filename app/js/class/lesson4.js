// 字符串扩展
// 字符串新增特性
// Unicode表示法    遍历接口
// 模板字符串   新增方法（10种）

{
  console.log('a', '\u0061');
  console.log('s', '\u20BB7');

  console.log('s', '\u{20BB7}');
}

{
  let s = '𠮷';
  let s1 = '𠮷a';

  // es5
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('0', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  // es6
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  // es5
  console.log(String.fromCharCode("0x20bb7"));
  // es6
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str = '\u{20bb7}abc';

  // es5
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }

  // es6
  for (let code of str) {
    console.log('es6', code);
  }
}

{
  let str = "string";
  console.log('includes', str.includes("r"));
  console.log('includes', str.includes("c"));

  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('str'));
}

{
  let str = "abc";
  console.log(str.repeat(2));
}

{
  let name = "wuchendi";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m);
}