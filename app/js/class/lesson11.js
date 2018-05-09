// Proxy和Reflect

{
  let obj = {
    time: '2017-03-11',
    name: 'wcd',
    _r: 123
  };
  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key];
      }
    }
  });
  console.log('get', monitor.time);

  monitor.time = '2018';
  monitor.name = 'wuchendi';
  console.log('set', monitor.time, monitor);
}