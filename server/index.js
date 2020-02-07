require("dotenv").config()
const express = require ('express')
const app = express()
const controller = require("./controller")
const massive = require("massive")

const {SERVER_PORT,CONNECTION_STRING} = process.env


massive(CONNECTION_STRING)
.then((dbinstance)=> app.set("db",dbinstance))
.catch(err =>console.log(err))


app.use(express.json())

app.post('/api/inventory', controller.create);
app.get('/api/inventory', controller.getAll);
app.get('/api/inventory/:id', controller.getOne);
app.put('/api/inventory/:id', controller.update);
app.delete('/api/inventory/:id', controller.delete);


app.listen(SERVER_PORT, ()=>{
    console.log(`server is listening to ${SERVER_PORT}`)
})