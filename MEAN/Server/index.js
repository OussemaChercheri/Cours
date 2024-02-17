const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('express-async-errors');
const db = require('./config/db'),
    routes = require('./controllers/employee.controller')

//middleware
app.use(bodyParser.json());
app.use('/api/employees', routes);

app.use((err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send("Something went wrong!");
});


db.query("SELECT 1")
    .then(() =>{
        console.log('db connection succeeded')
        app.listen(3001,
            () => console.log('Server started at 3001'))
    
    })

    .catch(err => console.log('db connection failed. \n' + err))

