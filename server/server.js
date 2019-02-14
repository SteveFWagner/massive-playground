require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ct = require('./controller')

const app = express()

app.use(bodyParser.json())

const {CONNECTION_STRING} = process.env


massive(CONNECTION_STRING).then((db)=>{
    app.set('db',db)
    console.log("Funky Towne has Das Dataz")
    app.listen(5000,()=>console.log("Welcome to Das Funky Towne listening on port 5k!"))
})

app.get('/api/things',ct.getThings)
app.get('/api/account/:id',ct.getSingle)

app.post('/api/account',ct.createUser)

app.delete('/api/account/:id', ct.deleteUser)

app.put('/api/account/:id', ct.updateUser)