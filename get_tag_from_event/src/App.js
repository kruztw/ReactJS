import './App.css';

function App() {
  const foo = (event) => {
      console.log(event.currentTarget);
      console.log(event.currentTarget.value);
  }

  return (
    <div className="App">
        <button onClick={foo} value="bar">Click me</button>
    </div>
  );
}

export default App;
