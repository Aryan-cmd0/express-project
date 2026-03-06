
const fs = require("fs")

const express = require("express");
const app = express();

app.get("/save/:name", (req, res) => {
    const name = req.params.name
    fs.appendFile("practise.txt", "\n" + name, (err) => {
        if (err) {
            console.log("Error appending file");
            return;
        }
        res.send("Your name is saved")
    })
})

app.get("/users", (req, res) => {
    fs.readFile("practise.txt", (err, data) => {
        if (err) {
            res.send("Error reading file");
            return;
        }
        res.send(data.toString())
    })
})

app.delete("/users", (req, res) => {
    fs.unlink("practise.txt", (err) => {
        if (err) {
            res.send("Error removing file");
            return;
        }
        res.send("File removed successfully")
    })
})


app.listen(8050, () => {
    console.log("Server running at http://localhost:8050");
});

