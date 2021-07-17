import { useLocation} from "react-router";
import { Routes, Route, Link, Router } from 'react-router-dom'

const Settings = () => {
    let location = useLocation();
    console.log(location);
    return <div>settings component</div>;
};


function App() {
    return (
        <div className="App">
            <Router>
                <ul>
                    <li>
                            Settings
                    </li>
                </ul>
            </Router>
        </div>
    );
}

export default App
