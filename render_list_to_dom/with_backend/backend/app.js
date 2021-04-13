const express = require("express");
const app = express();
const port = 8888;

app.post("/", (req, res) => {
    result = [{"x":"1", "y":"2"}, {"x":"<script>alert(1)</script>", "y":"4"}];
    res.send(result);
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`);
});
