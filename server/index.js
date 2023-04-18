const express = require('express')
const bodyParser = require('body-parser') 

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())

const chatRouter=require('./routes/chatRoutes')

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/chat',chatRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))