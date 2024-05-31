const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/products',(req,res)=>{
    res.send("Hello Product");
})
// app.post('/posts',(req,res)=>{
//     res.send(req);
// })
app.post('/text',(req,res)=>{
    res.send(req.body);
})

app.listen(3000,()=>{
    console.log("Server run port:3000");
})