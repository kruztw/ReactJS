import './App.css';

function App() {
    const var1 = [1, 2, 3];
    const var2 = [{"x":"1", "y":"2"}, {"x":"<script>alert(1)</script>", "y":"4"}];

    const result1 = var1.map((val) =>
        <li>{val}</li>
    );

    const result2 = var2.map((val) =>
        <p>{val.x}, {val.y}</p>
    );

    return (
        <>
            <div>
                {result1}
            </div>
            <div>
                {result2}
            </div>
        </>
    );
}

export default App;
