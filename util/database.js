const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Akanksh@99',
    database: 'MedicalDB'
});

module.exports = pool.promise();