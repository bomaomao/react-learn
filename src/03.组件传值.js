import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return <div>
    {props.name}出生于{props.age}
  </div>
}


function App() {

  const hello = {
    name: 'hello组件',
    age: '2000'
  }

  return (
    <div className="App">
        {/* ES6 语法 */}
        <Hello {...hello}/>
    </div>
  );
}

// 把组件暴露出去
export default App;
