// 数值扩展

{
  console.log('B', 0b111110111);
  console.log(0o767);
}

{
  // Number.isFinite() 用来检查一个数值是否为有限的（finite）
  // Number.isNaN() 用来检查一个值是否为 NaN
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite('true' / 0));
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));
}

{
  // Number.isInteger()用来判断一个值是否为整数
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));
  console.log('25', Number.isInteger('25'));
}

{
  // JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
  // ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
  // Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10));
  console.log('a', Number.isSafeInteger('a'));
}

{
  // Math.trunc() 的执行逻辑很简单，仅仅是删除掉数字的小数部分和小数点，不管参数是正数还是负数。
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));
}

{
  /*在ECMAScript6中提供了Math.sign方法，该方法的作用是返回传入参数的符号，指出它是正数，负数，0还是NaN。

    它有一些如下的特性：

    1.如果传进来的参数是数字，那么对于正数返回1，对于负数返回-1，对于0直接返回0。

    2.如果传进来的参数是字符串，而且该字符串可以转换为数字，那么规则同上。

    3.如果传进来的参数是数组，该数组只有一个元素且这个元素可以转换为数字，那么就返回这个元素的符号类型，规则同上。

    4.其他的类型通通返回NaN。
  */
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
}

{
  // Math.cbrt() 函数返回任意数字的立方根.
  console.log('-1', Math.cbrt(-1));
  console.log('8', Math.cbrt(8));
}