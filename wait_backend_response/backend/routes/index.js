const express = require("express");
const api = express.Router();

api.get("/GET", (req, res) => {
    res.send("You call GET");
});

api.post("/POST", (req, res) => {
    console.log(req.body);
    res.send("You call POST");
});
    
module.exports = { api };
