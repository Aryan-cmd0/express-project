const fs = require("fs")
const express = require("express")
const app = express()

//without authentication key, server will not work
//so we will add authentication key 
// authentication key is 12345

//Logger Middleware
app.use((req,res,next)=>{
    const time = new Date().toLocaleTimeString()
    console.log("Middleware executed");
    console.log(`${req.method} ${req.url} - ${time}`)
    
    next()
    
})

// Validation Middleware
function validateName(req, res, next) {
    const name = req.params.name
    if (name.length < 3) {
        return res.send("Name must be at least 3 characters")
    }
    next()
}

//Route using all middleware
app.get("/user/:name", validateName, (req, res) => {
    const name = req.params.name
    fs.appendFile("practise.txt", name + "\n", (err) => {
        if (err) {
            res.send("Error saving user")
            return
        }

        res.send(`User ${name} saved successfully`)
    })
})

// Authentication Middleware
function auth(req, res, next){
    const key = req.query.key
    if(key!=="12345"){
        return res.send("Invalid key")
    }
    next()
}

app.get("/admin",auth,(req,res)=>{
    res.send("Welcome Admin")
})

app.get("/", (req, res) => {
    res.send("Server working")
})

app.listen(8050, () => {
    console.log("Server running at http://localhost:8050")
})