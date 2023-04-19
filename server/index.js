require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

const chatRouter=require('./routes/chatRoutes')

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/chat',chatRouter)

mongoose.connect("mongodb+srv://Varad:Varad@cluster0.36hlagn.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }) 
    .catch(err => { console.log(err) })
    .then(console.log("DB connected"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))