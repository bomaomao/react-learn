### es7


### React
1. 核心概念：[react中一切通过JS来表现]
DOM（浏览器的概念）
虚拟DOM（框架的概念）：用JS对象来模拟DOM元素和嵌套关系，实现页面上DOM的高效更新【按需更新渲染，DOM Diff——tree diff ，component diff， element diff】
2. react：用于专门创建组件或者虚拟DOM的，同时组件的生命周期都在这个包中
3. react-dom：专门进行DOM操作的，最主要的应用场景，就是ReactDOM.reader()
4. 创建虚拟DOM元素后，使用ReactDOM把虚拟DOM渲染到页面上

### 基础概念
1.网页呈现的过程：
（1）浏览器请求服务器获取HTML代码
（2）浏览器在内存中解析HTML代码，并渲染出一颗DOM树
（3）浏览器把DOM树呈现到页面上

如何实现按需更新渲染页面：
获取新旧DOM树：它的作用是以js的形式在内存中描述真实的DOM结构，这样当页面内容需要发生变动时，React可以通过对前后虚拟DOM的比对，计算出如何以最小的代价操作真实DOM。