const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'SqL-2020.',
    database: 'electrondb',
})

function getConnection() {
    return connection;
}

module.exports = { getConnection };