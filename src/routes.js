const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Gamedig = require('gamedig');
const db_info = require('../db_info.json')
// Starting our app.
const app = express();

const connection = mysql.createPool(db_info);
// Creating a GET route that returns data from the 'users' table.

app.get('/ljtop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, ljrecord, ljpre, ljmax, ljsync, ljmax, ljheight, ljstrafes FROM playerjumpstats ORDER BY ljrecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/bhoptop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, bhoprecord, bhoppre, bhopmax, bhopsync, bhopmax, bhopheight, bhopstrafes FROM playerjumpstats ORDER BY bhoprecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/dropbhoptop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, dropbhoprecord, dropbhoppre, dropbhopmax, dropbhopsync, dropbhopmax, dropbhopheight, dropbhopstrafes FROM playerjumpstats ORDER BY dropbhoprecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/ljblocktop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, ljblockrecord, ljblockdist, ljblockpre, ljblockmax, ljblocksync, ljblockmax, ljblockheight, ljblockstrafes FROM playerjumpstats ORDER BY ljblockrecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/multibhoptop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, multibhoprecord, multibhopcount, multibhoppre, multibhopmax, multibhopsync, multibhopmax, multibhopheight, multibhopstrafes FROM playerjumpstats ORDER BY multibhoprecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/wjtop', function (req, res, next) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT name, steamid, wjrecord, wjpre, wjmax, wjsync, wjmax, wjheight, wjstrafes FROM playerjumpstats ORDER BY dropbhoprecord DESC LIMIT 10', function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(results)
    });
  });
});

app.get('/ServerSts', function (req, res, next) {
      Gamedig.query({
        type: 'csgo',
        host: '91.152.121.222',
        port: '27015'
      }).then((state, error) =>{
        if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.send(state)
  });
});

//app.use(bodyParser.json({type: 'application/json'}))
//app.use(bodyParser.urlencoded({extended: 'true'}))

// Starting our server.
app.listen(3001, () => {
    console.log('http://localhost:3001/ljtop; http://localhost:3001/bhoptop; http://localhost:3001/dropbhoptop; http://localhost:3001/ljblocktop; http://localhost:3001/multibhoptop; http://localhost:3001/wjtop; http://localhost:3001/ServerSts');
});
