const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const url = 'mongodb://localhost:27017/login'
const app = express()
app.use(bodyParser.json())

mongoose.connect(url,{useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open' ,() =>{
    console.log('Connected')
})


app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const logroute = require('./router/loginRouter')
app.use('/login',logroute)

app.listen(9000,()=>{
    console.log('Server Started')
})
