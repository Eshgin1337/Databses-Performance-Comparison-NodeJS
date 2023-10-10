const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "users"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE if not exists users (email VARCHAR(255), password VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.post("/signup", function (req, res) {
    email = req.body.email;
    password = req.body.password;
    var insertScript = `insert into users values ("${email}", "${password}")`;
    con.query(insertScript, function (err, result) {
        if (err) throw err;
        res.status(200).send("Row inserted");
    });
});


app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");
});
