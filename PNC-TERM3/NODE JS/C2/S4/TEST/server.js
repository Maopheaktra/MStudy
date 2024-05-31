const { log } = require('console');
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

let users = [
    {
        id: 1,
        name: "Rady",
        age: 29,
        email: "rady@example.com"
    },
    {
        id: 2,
        name: "Him",
        age: 25,
        email: "him@example.com"
    },
    {
        id: 3,
        name: "Yon",
        age: 25,
        email: "Yon@example.com"
    },
    {
        id: 4,
        name: "Mengheang",
        age: 23,
        email: "mengheangn@example.com"
    },
    {
        id: 5,
        name: "Rady",
        age: 20,
        email: "rady.boy@example.com"
    }
];

app.get('/', (req,res)=>{
    res.send({message: "Welcom API"});
})

app.get('/users', (req,res)=>{
    res.send(users);
})

app.get('/user', (req,res)=>{
    let name = req.query.name;
    let obj = []
    for (const user of users) {
        if (user.name.toLocaleLowerCase()== name.toLocaleLowerCase()) {
            obj.push(user);
        }
    }
    res.json(obj);
})

app.get('/users/:id', (req,res)=>{
    let id = req.params.id;
    let index = users.findIndex(user=>user.id == id)
    if (index != -1) {
        res.send(users[index]);
    }else{
        res.send({error: 'User not found'})
    }
    console.log(id);
    res.send(users)
})
app.listen(3000,()=>{
    console.log('Server run port:3000');
})