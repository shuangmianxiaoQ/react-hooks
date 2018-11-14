/**
 * useState 是 React 自带的一个 hook 函数，它的作用就是用来声明状态变量
 * useState 接收的参数是我们的状态初始值
 * 它的返回值是一个数组，数组的第 [0]项是当前当前的状态值，第 [1]项是可以改变状态值的方法函数
 */

import React, { useState, useEffect } from 'react';

function StatelessCounter() {
  console.log(useState, useEffect);
  const [count, setCount] = useState(0);

  // 类似于 componentDidMount 和 componentDidUpdate
  // 第二个参数来告诉 React 只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数）
  useEffect(
    () => {
      // 更新文档的标题
      document.title = `You clicked ${count} times`;
    },
    [count]
  );

  return (
    <div>
      <p>使用 React Hooks 的 无状态组件</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default StatelessCounter;
