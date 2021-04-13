import axios from "axios";
import ReactDOM from 'react-dom';

function App() {
    var input = [];
    var output = [];
    axios.post("/").then((response) => {
        console.log(response.data);
        input = response.data;
        output = input.map((out) =>
            <h1>{out.x}, {out.y}</h1>
        );
        
        ReactDOM.render(
            <ul>{output}</ul>,
            document.getElementById('result')
        );
  });

    return (
           <>
                <div id="result">
                    {output}
                </div>
           </>
    );
}

export default App;
