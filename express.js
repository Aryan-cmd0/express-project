const fs = require("fs")
const express = require("express")
const app = express()

// Save user
app.get("/user/:name", (req, res) => {
    const name = req.params.name

    fs.appendFile("practise.txt", name + "\n", (err) => {
        if (err) {
            res.send("Error saving user")
            return
        }

        res.send(`User ${name} saved successfully`)
    })
})

// Get all users
app.get("/users", (req, res) => {
    fs.readFile("practise.txt", (err, data) => {
        if (err) {
            res.send("Error reading file")
            return
        }

        res.send(data.toString())
    })
})

// Delete file
app.delete("/users", (req, res) => {
    fs.unlink("practise.txt", (err) => {
        if (err) {
            res.send("Error deleting file")
            return
        }

        res.send("Users deleted successfully")
    })
})
app.get("/users/:name", (req, res) => {
    const name = req.params.name

    fs.readFile("practise.txt", (err, data) => {
        if (err) {
            res.send("Error reading file")
            return
        }

        const users = data.toString().split("\n")

        if (users.includes(name)) {
            res.send("User Found")
        } else {
            res.send("User Not Found")
        }
    })
})

app.listen(8050, () => {
    console.log("Server running at http://localhost:8050")
})