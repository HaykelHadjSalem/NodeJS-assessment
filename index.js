const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const db = require('./db/db')
var cors = require('cors')
const swaggerDocs = require('./utils/swagger')
const pages = require('./routes/pages')
require('dotenv').config()
//use express static folder
app.use(express.static("./public"))
app.use(
    cors({
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    })
)
// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use('/page', pages)


//create connection
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server is running at port ${PORT} on ${process.env.HOST}`)
swaggerDocs(app, PORT)
})