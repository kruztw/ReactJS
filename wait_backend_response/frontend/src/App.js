import axios from "axios";


const instance = axios.create({
    baseURL: "/api",
    withCredentials: true
});


function App() {
    instance.get("/GET").then((response) => {
        console.log("method1 (promise): ", response)
        });

    let callback = function(response) {
        console.log("method2 (callback): ", response);
    }
    let foo = function(data, callback) {
        instance.get("/GET").then((response) => {
            callback(response);
        });
    }
    
    foo ("", callback);


    return (
           <>
           </>
    );
}

export default App;
