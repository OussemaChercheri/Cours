var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');



var app = express();

app.listen(3001,()=>{
    console.log('server is running');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter)

app.get("/", (req, res, next)=>{
    res.send("Oussema Chercheri")
})



module.exports = app;
