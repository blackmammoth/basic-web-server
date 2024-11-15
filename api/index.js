const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello InterTecHub Team!")
})

app.get('/name', (req, res) => {
    res.send("Haileyesus K. Dessie")
})

app.get('/hobby', (req, res) => {
    res.send("Watching Movies")
})

app.get('/dream', (req, res) => {
    res.send("Be grateful...what more can I ask?")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;