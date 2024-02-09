const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'employee-db'
})


module.exports = mysqlPool;