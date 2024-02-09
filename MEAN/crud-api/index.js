const express = require('express');
const app = express();
const db = require('./db'),
    routes = require('./controllers/employee.controller')

//middleware
app.use('/api/employees', routes)


db.query("SELECT 1")
    .then(() =>{
        console.log('db connection succeeded')
        app.listen(3001,
            () => console.log('Server started at 3001'))
    
    })

    .catch(err => console.log('db connection failed. \n' + err))

