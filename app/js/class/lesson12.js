// 类
// 基本语法   类的继承   静态方法
// 静态属性   getter    setter

{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'wcd') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}