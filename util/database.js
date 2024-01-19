const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    database:'node-training',
    password: 'nodetraining'
});

module.exports = pool.promise();


