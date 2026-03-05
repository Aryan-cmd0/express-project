
const fs = require("fs")

const express = require("express");
const app = express();

app.get("/save/:name",(req,res)=>{
    const name = req.params.name
    fs.appendFile("practise.txt","\n"+name,(err)=>{
        if (err) {
                console.log("Error appending file");
                return;
    }
    res.send("Your name is saved")
})
})
app.listen(8050, () => {
    console.log("Server running at http://localhost:8050");
});