const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./src/db.js')
const cors = require('cors')
const routes = require('./src/router')
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
app.use('/employees',routes)
app.listen(3000,()=>{console.log('Server is Up!')})
