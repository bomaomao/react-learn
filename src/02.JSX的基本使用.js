import ReactDOM from 'react-dom'; 
 // react中一切皆对象
 const h1 = <h1>加入对象</h1>
 const h2 = [
   <h1>这是对象，第一个下标</h1>,
   <h1>这是对象，第二个下标</h1>,
   <h1>这是对象，第三个下标</h1>
 ]

const mydiv = <div>
   这是一个div元素
   {h1}
   {h2}
   </div>  
// 在JS中默认不能写类似HTML的标记语言，否则打包会失败;可以使用babel来转化js中的标签
// 大家注意：这种在JS中写入HTML的语法，叫做JSX语法；
// 【JSX】是语法糖，通过babel转成React.createElement函数,在babel官网上可以在线把JSX转成React的JS语法
// JSX中className代替class，htmlFor代替label的for属性


// 创建虚拟DOM元素后，使用ReactDOM把虚拟DOM渲染到页面上
ReactDOM.render(mydiv, document.getElementById('root'))
