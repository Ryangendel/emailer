const express = require("express")
const app = express() //sets up application to listen for incoming requests

//app object represents the underlying running express server

app.get("/",(req,res)=>{
    res.send({hi:"there"})
})

const PORT = process.env.PORT || 5000 
app.listen(PORT)