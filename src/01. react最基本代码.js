import React from 'react';  // 导出包名必须为React 创建组件虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 导出包名必须为ReactDOM 把创建好的组件和虚拟DOM放在页面上展示
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

//  创建虚拟DOM元素后，使用ReactDOM把虚拟DOM渲染到页面上
// 渲染 页面上的DOM结构，最好的方式就是写 HTML代码；HTML是最优秀的标记语言
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const  mydiv = React.createElement('div', {title : 'div my'}, '这是一个div元素')

// 创建虚拟DOM元素后，使用ReactDOM把虚拟DOM渲染到页面上
ReactDOM.render(mydiv, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
