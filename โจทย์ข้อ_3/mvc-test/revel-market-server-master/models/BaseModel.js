var mysql = require('mysql');

var connection = mysql.createConnection({
    connectionimit: 100,
    host: 'localhost',
    user: 'root',
    port: 3306, 
    password: 'root123456',
    database: 'revel-market_db',
    multipleStatements: true
}); 

connection.connect();

module.exports = connection;