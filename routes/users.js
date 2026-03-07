const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("All users")
})

router.get("/:name", (req,res)=>{
    res.send(`User: ${req.params.name}`)
})

module.exports = router