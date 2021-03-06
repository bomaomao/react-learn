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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        000
        <Hello {...hello}/>
      </header> 
    </div>
  );
}

export default App;
