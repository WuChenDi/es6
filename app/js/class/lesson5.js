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
}