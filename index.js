const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(Number.parseInt(process.env.PORT), ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`)
})