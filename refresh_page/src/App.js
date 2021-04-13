import './App.css';

function App() {
  const reload = (event) => {
      window.location.reload();
  }

  return (
    <div className="App">
        <button onClick={reload}>Click me</button>
    </div>
  );
}

export default App;
