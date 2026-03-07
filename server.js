const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

// Home route
app.get("/", (req, res) => {
    res.send("My first Express server 🚀");
});

// About route
app.get("/about",(req,res)=>{
    res.send("This is my express learning server")
})

// Use router
app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});