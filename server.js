const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("My first Express server 🚀");
});


app.get("/user/:name", (req, res) => {
    console.log("User route hit")
    res.send(`Hello ${req.params.name}👋 `)
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});