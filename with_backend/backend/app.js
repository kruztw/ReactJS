const express = require("express");
const app = express();
const port = 8888;
const { api } = require("./routes");


app.use(express.json());
app.use("/api", api); 

app.listen(port, '127.0.0.1', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
});
