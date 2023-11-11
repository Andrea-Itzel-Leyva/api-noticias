const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const cors = require('cors');

const routes = require('./routes')

const app = express()

app.use(cors());

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'noticias'
} 

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json()) 

app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})
