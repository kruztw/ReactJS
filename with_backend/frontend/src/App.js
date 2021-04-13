import axios from "axios";


const instance = axios.create({
    baseURL: "/api",
    withCredentials: true
});


function App() {
    instance.get("/GET").then((res) => {
        console.log(res.data);
    });

    instance.post("/POST", {"msg": "HI"}).then((res) => {
        console.log(res.data);
    });

    axios.get("/api/GET").then((res) => {
        console.log(res.data);
    });

    axios.post("/api/POST", {"msg": "HI"}).then((res) => {
        console.log(res.data);
    });

    return (
           <>
           </>
    );
}

export default App;
